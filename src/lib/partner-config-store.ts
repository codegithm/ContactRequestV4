import {
  getAllPartnerIds,
  getPartnerConfig,
  type PartnerConfig,
} from "@/lib/partners";
import {
  areApiCallsEnabled,
  buildApiUrl,
  getEnvironmentConfig,
} from "@/config/environment";

const STORAGE_KEY = "contactrequest.local-partners.v1";

export interface PartnerConfigStore {
  list(): Promise<PartnerConfig[]>;
  get(partnerId: string): Promise<PartnerConfig | null>;
  upsert(config: PartnerConfig): Promise<void>;
}

function normalizeField(field: PartnerConfig["fields"][number]) {
  return {
    ...field,
    isActive: field.isActive !== false,
  };
}

function normalizePartnerConfig(config: PartnerConfig): PartnerConfig {
  const normalizedSections = (config.sections ?? []).map((section) => ({
    ...section,
    fields: section.fields.map(normalizeField),
  }));

  const normalizedFields = (config.fields ?? []).map(normalizeField);

  if (normalizedSections.length === 0 && normalizedFields.length > 0) {
    normalizedSections.push({
      id: "main",
      title: "Contact Details",
      fields: normalizedFields,
    });
  } else if (normalizedFields.length > 0) {
    const sectionFieldIds = new Set(
      normalizedSections.flatMap((section) =>
        section.fields.map((field) => field.id),
      ),
    );
    const unassigned = normalizedFields.filter(
      (field) => !sectionFieldIds.has(field.id),
    );

    if (unassigned.length > 0) {
      const mainSection =
        normalizedSections.find((section) => section.id === "main") ||
        normalizedSections[0];
      mainSection.fields = [...mainSection.fields, ...unassigned];
    }
  }

  return {
    ...config,
    partnerId: normalizePartnerId(config.partnerId),
    isActive: config.isActive !== false,
    fields: normalizedSections.flatMap((section) => section.fields),
    sections: normalizedSections,
  };
}

function normalizePartnerId(partnerId: string): string {
  return partnerId.trim().toLowerCase();
}

function getBasePartners(): PartnerConfig[] {
  return getAllPartnerIds()
    .map((id) => getPartnerConfig(id))
    .filter((cfg): cfg is PartnerConfig => !!cfg)
    .map(normalizePartnerConfig);
}

function mergePartners(
  base: PartnerConfig[],
  overrides: PartnerConfig[],
): PartnerConfig[] {
  const merged = new Map<string, PartnerConfig>();

  base.forEach((cfg) => {
    merged.set(normalizePartnerId(cfg.partnerId), cfg);
  });

  overrides.forEach((cfg) => {
    const normalized = normalizePartnerConfig(cfg);
    merged.set(normalized.partnerId, normalized);
  });

  return Array.from(merged.values());
}

function readLocalPartners(): PartnerConfig[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as PartnerConfig[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function writeLocalPartners(partners: PartnerConfig[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(partners));
}

class LocalPartnerConfigStore implements PartnerConfigStore {
  async list(): Promise<PartnerConfig[]> {
    const base = getBasePartners();
    const local = readLocalPartners();
    return mergePartners(base, local);
  }

  async get(partnerId: string): Promise<PartnerConfig | null> {
    const id = normalizePartnerId(partnerId);
    const partners = await this.list();
    return (
      partners.find((cfg) => normalizePartnerId(cfg.partnerId) === id) ?? null
    );
  }

  async upsert(config: PartnerConfig): Promise<void> {
    const id = normalizePartnerId(config.partnerId);
    const local = readLocalPartners();
    const existingIndex = local.findIndex(
      (cfg) => normalizePartnerId(cfg.partnerId) === id,
    );

    const nextConfig = normalizePartnerConfig({ ...config, partnerId: id });
    if (existingIndex >= 0) {
      local[existingIndex] = nextConfig;
    } else {
      local.push(nextConfig);
    }

    writeLocalPartners(local);
  }
}

/**
 * DB-ready adapter contract. Replace endpoint behavior once backend is available.
 */
class ApiPartnerConfigStore implements PartnerConfigStore {
  constructor(private readonly fallback = new LocalPartnerConfigStore()) {}

  async list(): Promise<PartnerConfig[]> {
    if (!areApiCallsEnabled()) {
      return this.fallback.list();
    }

    try {
      const response = await fetch(buildApiUrl("/api/partners/config"), {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch partner config");
      const payload = (await response.json()) as PartnerConfig[];
      if (!Array.isArray(payload)) throw new Error("Invalid payload shape");
      return payload;
    } catch {
      return this.fallback.list();
    }
  }

  async get(partnerId: string): Promise<PartnerConfig | null> {
    const id = normalizePartnerId(partnerId);
    if (!areApiCallsEnabled()) {
      return this.fallback.get(id);
    }

    try {
      const response = await fetch(buildApiUrl(`/api/partners/config/${id}`), {
        method: "GET",
      });
      if (!response.ok) throw new Error("Partner not found");
      return normalizePartnerConfig((await response.json()) as PartnerConfig);
    } catch {
      return this.fallback.get(id);
    }
  }

  async upsert(config: PartnerConfig): Promise<void> {
    if (!areApiCallsEnabled()) {
      await this.fallback.upsert(config);
      return;
    }

    try {
      const response = await fetch(buildApiUrl("/api/partners/config"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!response.ok) throw new Error("Failed to save partner config");
    } catch {
      await this.fallback.upsert(config);
    }
  }
}

export function createPartnerConfigStore(
  mode: "local" | "api" | "auto" = "auto",
): PartnerConfigStore {
  if (mode === "local") {
    return new LocalPartnerConfigStore();
  }

  if (mode === "api") {
    return new ApiPartnerConfigStore();
  }

  const { baseUrl } = getEnvironmentConfig();
  const shouldUseApi = areApiCallsEnabled() && baseUrl.trim().length > 0;

  return shouldUseApi
    ? new ApiPartnerConfigStore()
    : new LocalPartnerConfigStore();
}

import { buildApiUrl, getActiveEnvironmentName } from "@/config/environment";

export interface VdnDirectoryEntry {
  vdnNo: string;
  brokerCode: string;
}

export const mockTestingVdnDirectoryEntries: VdnDirectoryEntry[] = [
  { vdnNo: "Test", brokerCode: "FirstForWoman" },
  { vdnNo: "Alpha-100", brokerCode: "Momentum" },
  { vdnNo: "Bravo-200", brokerCode: "DialDirect" },
];

export const VDN_DIRECTORY_ENDPOINT = buildApiUrl("/vdns");

function isVdnDirectoryEntry(value: unknown): value is VdnDirectoryEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.vdnNo === "string" &&
    typeof candidate.brokerCode === "string"
  );
}

function toVdnDirectoryEntry(value: unknown): VdnDirectoryEntry | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Record<string, unknown>;
  const rawVdnNo =
    typeof candidate.vdnNo === "string"
      ? candidate.vdnNo
      : typeof candidate.vndNo === "string"
        ? candidate.vndNo
        : null;
  const rawBrokerCode =
    typeof candidate.brokerCode === "string"
      ? candidate.brokerCode
      : typeof candidate.brockerCode === "string"
        ? candidate.brockerCode
        : null;

  if (!rawVdnNo || !rawBrokerCode) {
    return null;
  }

  return {
    vdnNo: rawVdnNo,
    brokerCode: rawBrokerCode,
  };
}

export function normalizeVdnDirectoryEntries(
  payload: unknown,
): VdnDirectoryEntry[] {
  if (!Array.isArray(payload)) {
    return [];
  }

  const uniqueEntries = new Map<string, VdnDirectoryEntry>();

  payload.forEach((entry) => {
    const normalizedEntry = isVdnDirectoryEntry(entry)
      ? entry
      : toVdnDirectoryEntry(entry);

    if (!normalizedEntry) {
      return;
    }

    const vdnNo = normalizedEntry.vdnNo.trim();
    const brokerCode = normalizedEntry.brokerCode.trim();
    if (!vdnNo || !brokerCode) {
      return;
    }

    uniqueEntries.set(vdnNo.toLowerCase(), { vdnNo, brokerCode });
  });

  return Array.from(uniqueEntries.values()).sort((left, right) =>
    left.vdnNo.localeCompare(right.vdnNo),
  );
}

export function findVdnDirectoryEntry(
  vdnNo: string,
  entries: VdnDirectoryEntry[],
): VdnDirectoryEntry | null {
  const normalizedVdnNo = vdnNo.trim().toLowerCase();
  if (!normalizedVdnNo) {
    return null;
  }

  return (
    entries.find((entry) => entry.vdnNo.toLowerCase() === normalizedVdnNo) ??
    null
  );
}

export async function fetchVdnDirectoryEntries(): Promise<VdnDirectoryEntry[]> {
  const response = await fetch(VDN_DIRECTORY_ENDPOINT, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load VDN directory entries.");
  }

  return normalizeVdnDirectoryEntries(await response.json());
}

export function getLocalVdnDirectoryEntries(): VdnDirectoryEntry[] {
  if (getActiveEnvironmentName() !== "testing") {
    return [];
  }

  return mockTestingVdnDirectoryEntries;
}

export function shouldUseMockVdnDirectory(): boolean {
  return getActiveEnvironmentName() === "testing";
}

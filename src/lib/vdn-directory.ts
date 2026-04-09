import { buildApiUrl, getActiveEnvironmentName } from "@/config/environment";
import type { VdnDirectoryEntry } from "@/models/vdn-directory";
export type { VdnDirectoryEntry } from "@/models/vdn-directory";
export const mockTestingVdnDirectoryEntries: VdnDirectoryEntry[] = [
    { vdnNo: "Test", brokerCode: "FirstForWoman", isActive: true },
    { vdnNo: "Alpha-100", brokerCode: "Momentum", isActive: true },
    { vdnNo: "Bravo-200", brokerCode: "DialDirect", isActive: true },
];
export const VDN_DIRECTORY_ENDPOINT = buildApiUrl("/vdns");
function isVdnDirectoryEntry(value: unknown): value is VdnDirectoryEntry {
    if (!value || typeof value !== "object") {
        return false;
    }
    const candidate = value as Record<string, unknown>;
    const vdnValue = typeof candidate.vdnNo === "string"
        ? candidate.vdnNo
        : typeof candidate.VdnNo === "string"
            ? candidate.VdnNo
            : null;
    const brokerValue = typeof candidate.brokerCode === "string"
        ? candidate.brokerCode
        : typeof candidate.brockerCode === "string"
            ? candidate.brockerCode
            : typeof candidate.BrokerCode === "string"
                ? candidate.BrokerCode
                : typeof candidate.BrockerCode === "string"
                    ? candidate.BrockerCode
                    : null;
    return typeof vdnValue === "string" && typeof brokerValue === "string";
}
function toVdnDirectoryEntry(value: unknown): VdnDirectoryEntry | null {
    if (!value || typeof value !== "object") {
        return null;
    }
    const candidate = value as Record<string, unknown>;
    const rawVdnNo = typeof candidate.vdnNo === "string"
        ? candidate.vdnNo
        : typeof candidate.VdnNo === "string"
            ? candidate.VdnNo
            : typeof candidate.vndNo === "string"
                ? candidate.vndNo
                : null;
    const rawBrokerCode = typeof candidate.brokerCode === "string"
        ? candidate.brokerCode
        : typeof candidate.BrokerCode === "string"
            ? candidate.BrokerCode
            : typeof candidate.brockerCode === "string"
                ? candidate.brockerCode
                : typeof candidate.BrockerCode === "string"
                    ? candidate.BrockerCode
                    : null;
    const rawIsActive = typeof candidate.isActive === "boolean"
        ? candidate.isActive
        : typeof candidate.IsActive === "boolean"
            ? candidate.IsActive
            : true;
    if (!rawVdnNo || !rawBrokerCode || rawIsActive !== true) {
        return null;
    }
    return {
        vdnNo: rawVdnNo,
        brokerCode: rawBrokerCode,
        isActive: rawIsActive,
    };
}
export function normalizeVdnDirectoryEntries(payload: unknown): VdnDirectoryEntry[] {
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
        uniqueEntries.set(vdnNo.toLowerCase(), {
            vdnNo,
            brokerCode,
            isActive: normalizedEntry.isActive,
        });
    });
    return Array.from(uniqueEntries.values()).sort((left, right) => left.vdnNo.localeCompare(right.vdnNo));
}
export function findVdnDirectoryEntry(vdnNo: string, entries: VdnDirectoryEntry[]): VdnDirectoryEntry | null {
    const normalizedVdnNo = vdnNo.trim().toLowerCase();
    if (!normalizedVdnNo) {
        return null;
    }
    return (entries.find((entry) => entry.vdnNo.toLowerCase() === normalizedVdnNo) ??
        null);
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

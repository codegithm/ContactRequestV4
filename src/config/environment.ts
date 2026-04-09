import { environmentDev } from "@/config/environment.dev";
import { environmentLocal } from "@/config/environment.local";
import { environmentProd } from "@/config/environment.prod";
import { environmentSit } from "@/config/environment.sit";
import { environmentTesting } from "@/config/environment.testing";
import { environmentUat } from "@/config/environment.uat";
import type { AppEnvironmentName, EnvironmentConfig, } from "@/config/environment.types";
const environmentMap: Record<AppEnvironmentName, EnvironmentConfig> = {
    local: environmentLocal,
    dev: environmentDev,
    sit: environmentSit,
    uat: environmentUat,
    prod: environmentProd,
    testing: environmentTesting,
};
function normalizeEnvironmentName(value: string | undefined): AppEnvironmentName {
    if (!value) {
        return "local";
    }
    const normalized = value.trim().toLowerCase();
    if (normalized === "local")
        return "local";
    if (normalized === "dev")
        return "dev";
    if (normalized === "sit")
        return "sit";
    if (normalized === "uat")
        return "uat";
    if (normalized === "prod")
        return "prod";
    if (normalized === "testing")
        return "testing";
    return "local";
}
export function getActiveEnvironmentName(): AppEnvironmentName {
    return normalizeEnvironmentName(process.env.NEXT_PUBLIC_APP_ENV ?? process.env.APP_ENV);
}
export function getEnvironmentConfig(): EnvironmentConfig {
    return environmentMap[getActiveEnvironmentName()];
}
export function areApiCallsEnabled(): boolean {
    return getEnvironmentConfig().enableApiCalls;
}
export function buildApiUrl(path: string): string {
    const { baseUrl } = getEnvironmentConfig();
    if (!baseUrl) {
        return path;
    }
    const trimmedBase = baseUrl.replace(/\/+$/, "");
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${trimmedBase}${normalizedPath}`;
}

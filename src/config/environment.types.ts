export type AppEnvironmentName = "local" | "dev" | "sit" | "uat" | "prod" | "testing";
export interface EnvironmentConfig {
    name: AppEnvironmentName;
    baseUrl: string;
    enableApiCalls: boolean;
}

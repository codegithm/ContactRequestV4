import type { EnvironmentConfig } from "@/config/environment.types";

export const environmentProd: EnvironmentConfig = {
  name: "prod",
  baseUrl: "https://partner-connect-prod.example.com",
  enableApiCalls: true,
};

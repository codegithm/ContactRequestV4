import type { EnvironmentConfig } from "@/config/environment.types";

export const environmentTesting: EnvironmentConfig = {
  name: "testing",
  // Testing must use local behavior and should not hit real APIs.
  baseUrl: "",
  enableApiCalls: false,
};

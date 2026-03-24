# Partner Connect Hub

## Environment Configuration

Base URLs are defined in `src/config` through hardcoded config files:

- `environment.local.ts` – Empty baseUrl, uses same-origin routes like `/api/*`
- `environment.dev.ts` – `https://partner-connect-dev.example.com`
- `environment.sit.ts` – `https://partner-connect-sit.example.com`
- `environment.uat.ts` – `https://partner-connect-uat.example.com`
- `environment.prod.ts` – `https://partner-connect-prod.example.com`
- `environment.testing.ts` – Empty baseUrl, `enableApiCalls: false` (forces local storage, no real API calls)

### Development Mode

For local and development environments, use dev mode with hot reload:

- `npm run dev` or `npm run local` → **local** (same-origin)
- `npm run devenv` or `npm run dev:dev` → **dev**
- `npm run sit` or `npm run dev:sit` → **sit** (dev mode)
- `npm run uat` or `npm run dev:uat` → **uat** (dev mode)
- `npm run testing` → **testing** (no API calls, local storage only)

### Production Mode

For sit, uat, and prod environments, use production build and start:

```bash
# Build for environment
npm run build:sit
npm run build:uat
npm run build:prod

# Start production server
npm run start:sit
npm run start:uat
npm run start:prod
```

### How It Works

1. The active environment is selected via the `NEXT_PUBLIC_APP_ENV` variable
2. The startup script sets `NEXT_PUBLIC_APP_ENV=<env>` using `cross-env`
3. `src/config/environment.ts` resolves and loads the matching config
4. `buildApiUrl(path)` prepends that environment's `baseUrl` to API paths
5. For testing mode, `enableApiCalls: false` forces local storage, bypassing all API calls

### Customization

Edit the hardcoded baseUrl values directly in the config files:

```typescript
// src/config/environment.sit.ts
export const environmentSit: EnvironmentConfig = {
  name: "sit",
  baseUrl: "https://your-sit-server.com",
  enableApiCalls: true,
};
```
"# ContactRequestV4" 

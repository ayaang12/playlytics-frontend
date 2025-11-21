/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_FRONTEND_API_KEY: string;
  readonly VITE_FUN_LITTLE_MESSAGE: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

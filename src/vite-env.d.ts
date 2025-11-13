/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_FRONTEND_API_KEY: string;
  // add other VITE_... vars here as needed
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

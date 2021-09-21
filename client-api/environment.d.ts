declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // APP
      APP_PORT: number;
      APP_GQL_PREFIX_PATH: string;
      APP_GQL_DEBUG: boolean;
      APP_GQL_PLAYGROUND: boolean;
      // Database
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_DB: string;
    }
  }
}

export {};

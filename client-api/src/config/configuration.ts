// import dotenv so env variables load before the app start
import 'dotenv/config';

export const configuration = {
  app: {
    port: process.env.APP_PORT || 8888,
    gqlPrefixPath: process.env.APP_GQL_PREFIX_PATH || '/api/v1',
    gqlDebug: process.env.APP_GQL_DEBUG || false,
    gqlPlayground: process.env.APP_GQL_PLAYGROUND || true,
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
  },
};

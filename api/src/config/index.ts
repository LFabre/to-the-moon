import dotenv from 'dotenv';
dotenv.config();

export const Config = {
  stage: {
    current: process.env.STAGE,
    development: process.env.STAGE === 'development',
    production: process.env.STAGE === 'production',
  },
  server: {
    port: process.env.LISTEN_PORT,
  },
  request: {
    traceHeader: process.env.REQUEST_TRACE_HEADER || 'x-trace',
  },
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};

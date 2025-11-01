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
};

import { Express } from 'express';
import { ping } from '@controllers/ping';

export const registerRoutes = (app: Express) => {
  app.get('/ping', ping);
};

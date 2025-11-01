import { Express } from 'express';
import { ping } from '@controllers/ping';
import { notFound } from '@controllers/notFound';

export const registerRoutes = (app: Express) => {
  app.get('/ping', ping);

  app.use(notFound);
};

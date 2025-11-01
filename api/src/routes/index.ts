import { Express } from 'express';
import { ping } from '@controllers/ping';
import { notFound } from '@controllers/notFound';
import { getUsers } from '@controllers/users/getUsers';

export const registerRoutes = (app: Express) => {
  app.get('/v1/users', getUsers);
  app.get('/v1/ping', ping);

  app.use(notFound);
};

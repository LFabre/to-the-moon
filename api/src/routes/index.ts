import { Express } from 'express';
import { ping } from '@controllers/ping';
import { notFound } from '@controllers/notFound';
import { getUsers } from '@controllers/users/getUsers';
import { postUser } from '@controllers/users/postUser';
import { postUserDeposit } from '@controllers/users/postUserDeposit';
import { postUserWithdraw } from '@controllers/users/postUserWithdraw';

export const registerRoutes = (app: Express) => {
  app.get('/v1/users', getUsers);
  app.post('/v1/users', postUser);

  app.post('/v1/users/:userId/deposit', postUserDeposit);
  app.post('/v1/users/:userId/withdraw', postUserWithdraw);

  app.get('/v1/ping', ping);

  app.use(notFound);
};

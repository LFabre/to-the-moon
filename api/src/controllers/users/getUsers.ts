import { Request, Response } from 'express';
import { UserService } from '@services/UserService';

interface GetUsersQuery {
  page?: string;
  limit?: string;
}

export const getUsers = async (req: Request<object, object, object, GetUsersQuery>, res: Response) => {
  const { page = 1, limit = 10 } = req.query;
  req.logger.info(`getUsers | query:`, { page, limit });

  const response = await UserService.getUsers(Number(page), Number(limit));
  req.logger.info(`getUsers | response:`, JSON.stringify(response));

  res.json(response);
};

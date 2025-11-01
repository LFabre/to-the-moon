import { NextFunction, Request, Response } from 'express';
import { UserService } from '@services/UserService';
import { ErrorResourceAlreadyExists } from '@errors';

interface PostUserBody {
  email: string;
}

export const postUser = async (
  req: Request<object, object, PostUserBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    req.logger.info(`postUser | body:`, req.body);

    const existingUser = await UserService.getUserByEmail(req.body.email);
    if (existingUser) {
      next(new ErrorResourceAlreadyExists('User already exists with this email', { email: req.body.email }));
      return;
    }

    const response = await UserService.createUser(req.body.email);
    req.logger.info(`postUser | response:`, response);

    res.json(response);
  } catch (error) {
    req.logger.error(`postUser | error:`, error);
    next(error);
  }
};

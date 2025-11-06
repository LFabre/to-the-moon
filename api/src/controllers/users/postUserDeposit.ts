import { TransactionService } from '@services/TransactionService';
import { UserService } from '@services/UserService';
import { NextFunction, Request, Response } from 'express';

interface PostUserDepositParams {
  userId: number;
}

interface PostUserDepositBody {
  amount: number;
}

export const postUserDeposit = async (
  req: Request<PostUserDepositParams, object, PostUserDepositBody, object>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body, params } = req;
    req.logger.info('Start request deposit', { body, params });

    const user = await UserService.getUserById(params.userId);
    if (!user) {
      res.status(400).json({ error: 'invalid user' });
      return;
    }

    const transaction = await TransactionService.createDeposit(params.userId, body.amount);
    req.logger.info('Deposit created', transaction);

    res.json(transaction);
  } catch (error) {
    req.logger.error('Error | Failed to post user Deposit', error);
    next(error);
  }
};

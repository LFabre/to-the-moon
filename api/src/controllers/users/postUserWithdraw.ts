import { TransactionService } from '@services/TransactionService';
import { UserService } from '@services/UserService';
import { NextFunction, Request, Response } from 'express';

interface PostUserWithdrawParams {
  userId: number;
}

interface PostUserWithdrawBody {
  amount: number;
}

export const postUserWithdraw = async (
  req: Request<PostUserWithdrawParams, object, PostUserWithdrawBody, object>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body, params } = req;
    req.logger.info('Start request Withdraw', { body, params });

    const user = await UserService.getUserById(params.userId);
    if (!user) {
      res.status(400).json({ error: 'invalid user' });
      return;
    }

    const transactions = await TransactionService.findAllUserTransactions(params.userId);
    const balance = transactions.reduce((r, tx) => {
      if (tx.type === 'WITHDRAW') {
        return r - Number(tx.amount);
      }

      return r + Number(tx.amount);
    }, 0);

    if (balance < body.amount) {
      res.status(400).json({ error: 'invalid balance', details: { balance, amount: body.amount } });
      return;
    }

    const transaction = await TransactionService.createWithdraw(params.userId, body.amount);
    req.logger.info('Withdraw created', transaction);

    res.json(transaction);
  } catch (error) {
    req.logger.error('Error | Failed to post user Withdraw', error);
    next(error);
  }
};

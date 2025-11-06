import { ModelTransaction } from '@database';

export class TransactionService {
  static async createTransaction(userId: number, amount: number, type: string) {
    const transaction = await ModelTransaction.create({ userId, amount, type });
    return transaction.toJSON();
  }

  static async createDeposit(userId: number, amount: number) {
    const transaction = await TransactionService.createTransaction(userId, amount, 'DEPOSIT');
    return transaction;
  }

  static async createWithdraw(userId: number, amount: number) {
    const transaction = await TransactionService.createTransaction(userId, amount, 'WITHDRAW');
    return transaction;
  }

  static async findAllUserTransactions(userId: number) {
    const transactions = await ModelTransaction.findAll({ where: { userId } });
    return transactions;
  }
}

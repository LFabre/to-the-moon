import { ModelUser } from '@database';
import { User } from '@interfaces/User';

export class UserService {
  public static async getUsers(page: number, limit: number): Promise<{ result: User[]; total: number }> {
    const offset = (page - 1) * limit;

    const { count, rows } = await ModelUser.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      result: rows.map(user => user.toJSON()),
      total: count,
    };
  }
}

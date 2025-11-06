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

  public static async createUser(email: string): Promise<User> {
    const newUser = await ModelUser.create({ email });
    return newUser.toJSON();
  }

  public static async getUserByEmail(email: string): Promise<User | null> {
    const user = await ModelUser.findOne({ where: { email } });
    return user ? user.toJSON() : null;
  }

  public static async getUserById(id: number): Promise<User | null> {
    const user = await ModelUser.findOne({ where: { id } });
    return user ? user.toJSON() : null;
  }
}

import { Logger } from '@utils/Logger';
import { sequelize } from './connection';

export const connectDatabase = async (): Promise<void> => {
  const dbLogger = new Logger('[database]');

  try {
    await sequelize.authenticate();
    dbLogger.info('Database connection established successfully');
  } catch (error) {
    dbLogger.error('Unable to connect to the database:', error);
    throw error;
  }
};

export * from './models';

import { Sequelize } from 'sequelize';
import { Config } from '@config';
import { Logger } from '@utils/Logger';

const dbLogger = new Logger('[database]');

export const sequelize = new Sequelize({
  username: Config.database.username,
  password: Config.database.password,
  database: Config.database.database,
  host: Config.database.host,
  port: parseInt(Config.database.port || '5432', 10),
  dialect: Config.database.dialect as 'postgres',
  logging: Config.stage.development ? (msg) => dbLogger.debug(msg) : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


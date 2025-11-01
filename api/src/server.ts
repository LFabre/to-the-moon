import { Config } from '@config';
import { MainApp } from './app/main';
import { connectDatabase } from '@database';
import { Logger } from '@utils/Logger';

const serverLogger = new Logger('[server]');

connectDatabase()
  .then(() => {
    MainApp.listen(Config.server.port, async () => {
      serverLogger.info(`Server is running at port ${Config.server.port}`);
    });
  })
  .catch(error => {
    serverLogger.error('Failed to connect to database', error);
    process.exit(1);
  });

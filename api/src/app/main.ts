import express, { Express } from 'express';
import helmet from 'helmet';
import { registerRoutes } from '@routes';
import { errorLogger, errorHandler, initRequest } from '@middlewares';

export const MainApp: Express = express();

MainApp.use(helmet());
MainApp.use(express.json());
MainApp.use(initRequest);

registerRoutes(MainApp);

MainApp.use(errorLogger, errorHandler);

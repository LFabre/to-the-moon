import express, { Express } from 'express';
import helmet from 'helmet';
import { registerRoutes } from '@routes';

export const MainApp: Express = express();

MainApp.use(helmet());
MainApp.use(express.json());

registerRoutes(MainApp);

import { Logger } from '@utils';

declare global {
  namespace Express {
    interface Request {
      reqId: string;
      logger: Logger;
    }
  }
}

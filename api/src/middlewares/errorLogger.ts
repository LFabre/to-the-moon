import { ErrorStandard } from '@errors';
import { NextFunction, Request, Response } from 'express';

export const errorLogger = (error: Error, req: Request, _res: Response, next: NextFunction) => {
  req.logger.info(`errorLogger | ${req.path} |`, error);

  if (error instanceof ErrorStandard) {
    req.logger.info(`ErrorStandard errorCode`, error.errorCode);
    req.logger.info(`ErrorStandard message`, error.message);
    req.logger.info(`ErrorStandard details`, error.details);
    req.logger.info(`ErrorStandard originalError`, error.originalError ?? null);
  }

  next();
};

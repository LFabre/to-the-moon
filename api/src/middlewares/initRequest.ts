import { NextFunction, Request, Response } from 'express';
import { uuid, Logger } from '@utils';
import { Config } from '@config';

export const initRequest = (req: Request, res: Response, next: NextFunction) => {
  const reqId = uuid();

  const logger = new Logger(`reqId: ${reqId}`);
  req.logger = logger;

  logger.info('Request started');

  res.setHeader(Config.request.traceHeader, reqId);

  next();
};

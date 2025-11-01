import { ErrorStandard } from '@errors';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (error: Error, req: Request, res: Response, _next: NextFunction) => {
  req.logger.info(`errorHandler | ${req.path} |`, error);

  if (error instanceof ErrorStandard) {
    res.status(error.statusCode).json({
      message: error.message,
      errorCode: error.errorCode,
      statusCode: error.statusCode,
      details: error.details,
      timestamp: error.timestamp,
    });
  } else {
    res.status(500).json({ message: 'Unhandled error' });
  }
};

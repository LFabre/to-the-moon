import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
  req.logger.info('Ping requested');

  res.json({ message: 'pong' });
};

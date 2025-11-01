import { Request, Response } from 'express';

export const notFound = async (req: Request, res: Response) => {
  req.logger.info(
    'route not found',
    JSON.stringify({
      path: req.path,
      route: req.route,
      originalUrl: req.originalUrl,
    }),
  );

  res.status(404).json({ message: 'Route not found' });
};

import { Router, Request, Response } from 'express';

export const pingRouter = Router();

// GET /api/ping - Returns "pong"
pingRouter.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'pong',
  });
});


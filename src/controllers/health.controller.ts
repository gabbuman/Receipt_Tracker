import { Request, Response } from 'express';

export class HealthController {
  async check(req: Request, res: Response) {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString()
    });
  }
}
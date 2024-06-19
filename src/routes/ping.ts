import { Router, Request, Response } from 'express';

export const pingRouter = Router();

pingRouter.get('/', (req: Request, res: Response) => {
    res.send(true);
});

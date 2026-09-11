import {randomUUID} from 'node:crypto';
import { response, type NextFunction, type Request, type Response } from 'express';

export const requestContext = (
    _req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const requestId = randomUUID();
    res.locals.requestId = requestId;
    res.setHeader('X-Request-Id', requestId);
    next();
};
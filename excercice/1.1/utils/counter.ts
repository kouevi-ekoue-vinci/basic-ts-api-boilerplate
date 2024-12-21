import { Request, Response, NextFunction } from 'express';

let getRequestCount = 0;

const requestCounterMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    if (req.method === 'GET') {
        getRequestCount++;
        console.log(`Number of GET requests: ${getRequestCount}`);
    }
    next();
};

export default requestCounterMiddleware;
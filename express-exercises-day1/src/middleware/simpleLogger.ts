import { NextFunction, Response } from "express";

const simpleLog = (req: any, res: Response, next: NextFunction) =>
{
    console.log('Time: ${Date.now()}, Method: ${} and URL: ${req.originalUrl}');
    next();
};

export default simpleLog;
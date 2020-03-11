import { NextFunction, Response } from "express";

const headers = (req: any, res: Response, next: NextFunction) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

export default headers;
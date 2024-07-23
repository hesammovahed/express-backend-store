import {NextFunction, Request, Response} from "express";

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('hello')
    next()
}
export default testMiddleware
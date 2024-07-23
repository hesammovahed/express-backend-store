import {Request, Response, NextFunction, ErrorRequestHandler} from "express"
import serverError from "../errors/serverErrors";
import {logger} from "../helper/logger";

const errorHandlingMiddleware = (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction,) => {
    if (error instanceof serverError) {
        res.status(error.status).send({
            message: error.message
        });
    } else {
        logger.error(error)
        res.status(500).send({
            message: "internal server error"
        })
    }
}
export default errorHandlingMiddleware
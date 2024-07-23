import {NextFunction, Request, Response} from "express";
import {plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";

const validateMiddleware = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToInstance(dtoClass, req.body);

        const errors: ValidationError[] = await validate(dto);

        if (errors.length > 0) {
            const formattedErrors = errors.reduce((acc, error) => {
                acc[error.property] = Object.values(error.constraints || {});
                return acc;
            }, {} as { [key: string]: string[] });

            return res.status(400).json({
                data: [],
                errors: formattedErrors
            });
        }

        next();
    };
};

export default validateMiddleware;
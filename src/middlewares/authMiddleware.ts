import {Request, Response, NextFunction} from 'express';
import dotenv from "dotenv";

import {decodeJwt} from "../helper/jwtCompiler";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    dotenv.config();
    const secretKey: string = process.env.SECRET_KEY!;
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({message: 'Token not provided.'});
    try {
        decodeJwt({token})
        next();
    } catch (error) {
        return res.status(403).send({message: 'Invalid token!'});
    }
};
export default authMiddleware;

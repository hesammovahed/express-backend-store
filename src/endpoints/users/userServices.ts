import {Request, Response} from "express";
import userTypes from "./types/userTypes";
import serverError from "../../errors/serverErrors";

export async function createUser(req: Request, res: Response) {
    const body: userTypes = req.body;
    // for example use error
    // throw new serverError(404, "body not found")
    res.send("hello world")
}
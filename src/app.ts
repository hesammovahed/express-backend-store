import express, {Request, Response} from 'express';
import connectDB from "./lib/db";
import dotenv from "dotenv";
import cors from "cors";

import {setupSwagger} from "./lib/swagger";

import userControllers from "./endpoints/users/userControllers";
import {logger} from "./helper/logger";
import {errorHandlingMiddleware} from "./middlewares";

dotenv.config();

// connectDB()
const app = express();

// Middleware to parse JSON
app.use(express.json());
//Cors edits any req headers for connect with localhost
app.use(cors());

//routes groups
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});
app.use("/users", userControllers)

//set up swagger for doc apis
setupSwagger(app);

// Error handling middleware
app.use(errorHandlingMiddleware)

// Start the server
app.listen(process.env.PORT, () => {
    logger.info(`Server is running on port ${process.env.PORT}`);
});
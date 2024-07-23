import {Router, Request, Response, NextFunction} from "express";
import {createUser} from "./userServices";
import {validateMiddleware} from "../../middlewares";
import createUserDto from "./dto/validationDto/createUserDto";

const router = Router();
//example of use middleware in whole routes
// router.use(authMiddleware)

//use id
router.get("/user/:id", async (req: Request, res: Response) => {
    res.send("single user")
})
router.post("/user/create-user", validateMiddleware(createUserDto), async (req: Request, res: Response, next: NextFunction) => {
    try {
        await createUser(req, res)
    } catch (error) {
        next(error)
    }
})

router.get("/allUsers", async (req: Request, res: Response) => {
    res.send("hello from users")
})

export default router;
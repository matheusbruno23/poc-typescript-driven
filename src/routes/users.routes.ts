
import { usersController } from "@/controllers/users.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { userSchema } from "@/schemas/users.schemas";
import { Router } from "express";

const userRouter: Router = Router()

userRouter.post("/users", validateSchema(userSchema),usersController.createUser)
userRouter.get("/users", usersController.getUser)
userRouter.delete("/users", usersController.deleteUser)
userRouter.put("/users", usersController.updateName)

export default userRouter
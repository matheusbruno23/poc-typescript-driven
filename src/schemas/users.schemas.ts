import { CreateUser, User } from "@/protocols/types"
import Joi from "joi"

export const userSchema = Joi.object<CreateUser>({
    username: Joi.string().required(),
    email: Joi.string().required()
})
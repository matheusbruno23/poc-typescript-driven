import { CreateUser, User } from "@/protocols/types"
import { usersService } from "@/services/users.services"
import {Request, Response} from "express"
import httpStatus from "http-status"

async function createUser(req:Request, res:Response) {
    const {username, email} = req.body as CreateUser
    await usersService.createUser(username, email)
    res.sendStatus(httpStatus.CREATED)
}

async function getUser(req:Request, res:Response) {
    const {id} = req.body as User
    const user = await usersService.getUser(id)
    res.status(httpStatus.OK).send(user)
}
async function deleteUser(req:Request, res:Response) {
    const {id} = req.body as User
    await usersService.deleteUser(id)
    res.sendStatus(httpStatus.OK)
}
async function updateName(req:Request, res:Response) {
    const {id, username} = req.body as User
    await usersService.updateName(id, username)
    res.status(httpStatus.OK)
}

export const usersController = {createUser, getUser, deleteUser, updateName}


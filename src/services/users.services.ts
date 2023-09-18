import { errors } from "@/errors/error"
import { CreateUser, User } from "@/protocols/types"
import { usersRepository } from "@/repositories/users.repositories"

async function createUser(username:string , email:string): Promise<void> {
    const existingUser = await usersRepository.getUserByNameDB(username)
    if(existingUser) throw errors.conflict("username")
    
    await usersRepository.createUserDB(username, email)
}
// testar somente gmails e sem nomes repetidos/ email repetidos/ só pode dar update se já existir

function getUser(id: number): Promise<User>{
    const user = usersRepository.getUserByIdDB(id)
    return user
}
async function deleteUser(id: number): Promise<void> {
    const existingUser = await usersRepository.getUserByIdDB(id)
    if(!existingUser) throw errors.notFound()
    await usersRepository.deleteUserDB(id)
}
async function updateName(id: number, username:string) {
    const existingUser = await usersRepository.getUserByIdDB(id)
    if(!existingUser) throw errors.notFound()
    await usersRepository.updateUsernameDB(id, username)
}

export const usersService = {createUser, getUser, deleteUser, updateName}


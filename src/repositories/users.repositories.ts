import {db} from "@/database/database.connection"
import { CreateUser, User } from "@/protocols/types"

async function createUserDB(username: string, email: string): Promise<void> {
    await db.query<CreateUser>(`INSERT INTO users (username , email) VALUES ($1 , $2);`, [username, email])
}

async function getUserByIdDB(id:number): Promise<User> {
    const user = await db.query<User>(`SELECT * FROM users WHERE id=$1;`, [id])
    return user.rows[0] 
}

async function getUserByNameDB(username: string): Promise<User> {
    const user = await db.query<User>(`SELECT * FROM users WHERE username=$1;`, [username])
    return user.rows[0]
}

async function deleteUserDB(id: number): Promise<void>{
    await db.query<User>(`DELETE FROM users WHERE id=$1;`, [id])
}

async function updateUsernameDB(id: number ,username: string): Promise<void>{
    await db.query<User>(`UPDATE users SET username=$1 WHERE id=$2;`, [username, id])
}


export const usersRepository = {createUserDB, getUserByIdDB, getUserByNameDB, deleteUserDB, updateUsernameDB}
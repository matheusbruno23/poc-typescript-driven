export type User = {
    id: number
    username: string
    email: string
}

export type Error = {
    type:string
    message:string
}
export type CreateUser = Omit <User, "id">
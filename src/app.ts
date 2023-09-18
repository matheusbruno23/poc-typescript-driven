import express ,{Express, json} from "express"
import "express-async-errors"
import dotenv from "dotenv"
import userRouter from "@/routes/users.routes"
import errorHandler from "./middlewares/errorHandler"


dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(userRouter)
app.use(errorHandler)


const PORT: number = Number(process.env.PORT) || 5000
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
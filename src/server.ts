import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"

import apiRoutes from "./routes/api"


dotenv.config()

const server = express()
server.use(cors())
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.redirect("www.127.0.0.1:2000")
})

server.listen(process.env.PORT || 2000)
import express, {Request, Response} from "express"
import dotenv from "dotenv"

import apiRoutes from "./routes/api"


dotenv.config()

const server = express()

server.use(apiRoutes)

server.use("/" , (req: Request, res: Response) => {
    res.json({pong: true})
})

server.listen(process.env.PORT || 3000)
import express, {Request, Response} from "express"
import dotenv from "dotenv"
var cors = require('cors')

import apiRoutes from "./routes/api"


dotenv.config()

const server = express()
server.use(cors())
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)

server.use("/" , (req: Request, res: Response) => {
    res.json({pong: true})
})

server.listen(process.env.PORT || 3000)
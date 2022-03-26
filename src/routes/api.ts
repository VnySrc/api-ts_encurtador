import { Router } from "express";
import * as encurtController from "../controllers/encurtController"

const router = Router()

router.get("/encurtar/:urldefault" , encurtController.urlEncurt)



export default router;
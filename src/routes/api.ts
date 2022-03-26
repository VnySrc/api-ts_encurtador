import { Router } from "express";
import * as encurtController from "../controllers/encurtController"

const router = Router()

router.post("/encurtar" , encurtController.urlEncurt)
router.get("/:urlshort" , encurtController.urlEncurtToDefault)


export default router;
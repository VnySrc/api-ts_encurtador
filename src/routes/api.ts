import { Router } from "express";
import * as encurtController from "../controllers/encurtController"

const router = Router()

router.post("/encurtar" , encurtController.urlEncurt)
router.get("/:urlshort" , encurtController.urlEncurtToDefault)
router.get("/urls/list" , encurtController.urlFindAll)
router.get("/" , encurtController.home)

export default router;
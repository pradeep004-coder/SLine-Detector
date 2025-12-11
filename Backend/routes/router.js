import userValidation from "../middlewares/middleware.js";
import controller from "../controllers/controller.js";
import {Router} from "express";

const router = Router();

router.post("/api/database", userValidation, controller);

export default router;
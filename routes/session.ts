import { Router } from "express";
import { SessionController } from "../controllers/SessionController";
const router = Router();
const sessionController = new SessionController();

router.post('/', sessionController.login);


export default router;
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
const router = Router();

const userController = new UserController();
/* GET users listing. */
router.get('/', userController.index);
router.post('/', userController.create);
// router.put('/', userController.index);

export default router;

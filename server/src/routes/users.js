import { Router } from 'express';
import UserController from '../controllers/users';

const router = Router();
const { signup } = UserController;

/* GET users listing. */
router.post('/signup', signup);

export default router;

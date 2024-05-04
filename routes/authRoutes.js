import express from 'express';
import { registerController, loginController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router();

//routing
//Register || METHOD POST
router.post('/register', registerController);

//login || METHOD POST
router.post('/login', loginController)

//test
router.get('/test', requireSignin, isAdmin, testController)

export default router;
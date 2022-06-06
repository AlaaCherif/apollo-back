import { auth } from '../server.js';
import { createUser, getToken, login } from '../controllers/authController.js';
// import { getUsers } from '../controllers/userController.js';
import express from 'express';
const authRouter = express.Router();
authRouter.post('/', createUser);
authRouter.get('/', getToken);
authRouter.get('/login', login);
export default authRouter;

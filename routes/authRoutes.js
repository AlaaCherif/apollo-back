import { auth } from '../server.js';
import express from 'express';
const authRouter = express.Router();
authRouter.post('/', (req, res) => {
  auth
    .createUser({
      email: 'example@example.com',
      password: 'secretPassword',
      emailVerified: true,
      displayName: 'John Doe',
      disabled: false,
      phoneNumber: '+11234567890',
    })
    .then(userRecords => {
      res.status(201).json(userRecords);
    })
    .catch(err => {
      console.log(err);
    });
});
export default authRouter;

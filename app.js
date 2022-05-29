import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import userRouter from './routes/userRoutes.js';
const app = express();
// app.use(helmet());
// app.use(cors());
// app.use(express.json({ limit: '10kb' }));
// app.use(xss());
app.use('/', userRouter);

export default app;

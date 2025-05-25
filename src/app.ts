import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/module/student/student.route';

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('PH University server is running!');
};

app.get('/', getAController);

// console.log(process.cwd())j

export default app;

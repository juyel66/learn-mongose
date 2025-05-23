import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('PH University server is running!');
});

// console.log(process.cwd())j

export default app;

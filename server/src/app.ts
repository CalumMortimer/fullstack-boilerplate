import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRouter from './users/router';

export const app = express();

// Custom error handler
function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
}

// Default route
function defaultRoute(_req: Request, res: Response, _next: NextFunction) {
  res.sendStatus(404);
}

app.use(cors());
// this is an important line
app.use('/users', userRouter);
app.use(defaultRoute); // default route has to be last route
app.use(errorHandler); // Error handler goes last

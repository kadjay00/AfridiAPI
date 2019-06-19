import http from "http";
import express, { NextFunction, Request, Response } from "express";
import { applyMiddleware } from "./utils";

import middleware from "./middleware";
import apiRouter from './routes/apiRouter'

//Initiate db connections




const router = express();

applyMiddleware(middleware, router);
// print url on every request
router.use((req: Request, res: Response, next: NextFunction)=>
{
  console.log(req.method, req.originalUrl)
  next()
})


router.use('/api', apiRouter);


const { PORT = 3000 } = process.env;
const server = http.createServer(router);



server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

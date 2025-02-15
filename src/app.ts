/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentRouters } from "./app/modules/student/student.route";
import { userRouter } from "./app/modules/user/user.route";
import errorHandler from "./app/middleWare/globalErrorHndler";
import router from "./app/routes";
import notFound from "./app/middleWare/notFound";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.use(errorHandler);
//not found route
app.use(notFound);

export default app;

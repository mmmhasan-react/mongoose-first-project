/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentRouters } from "./app/config/modules/student/student.route";
import { userRouter } from "./app/config/modules/user/user.route";
import errorHandler from "./app/config/errorHandler/globalErrorHndler";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRouters);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

export default app;

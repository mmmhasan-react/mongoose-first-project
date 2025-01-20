import express from "express";
import cors from "cors";
import { studentRouters } from "./app/config/modules/student/student.route";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRouters);

export default app;

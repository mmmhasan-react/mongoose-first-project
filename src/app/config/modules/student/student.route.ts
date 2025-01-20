import express from "express";
import { studentControllers } from "./student.controller";
const router = express.Router();

router.post("/create-student", studentControllers.createStudent);
router.get("/getAll-student", studentControllers.getAllStudents);

export const studentRouters = router;

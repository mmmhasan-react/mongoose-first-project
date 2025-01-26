import express from "express";
import { studentControllers } from "./student.controller";
const router = express.Router();

router.post("/create-student", studentControllers.createStudent);
router.get("/getAll-student", studentControllers.getAllStudents);
router.get("/getSingle-student/:id", studentControllers.getSingleStudent);
router.delete("/getSingle-student/:id", studentControllers.deleteStudent);

export const studentRouters = router;

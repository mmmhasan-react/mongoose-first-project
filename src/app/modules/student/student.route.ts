import express from "express";
import { studentControllers } from "./student.controller";
const router = express.Router();

router.get("/getAll-student", studentControllers.getAllStudents);
router.get("/getSingle-student/:id", studentControllers.getSingleStudent);
router.delete("/delete-student/:id", studentControllers.deleteStudent);

export const studentRouters = router;

import { userControllers } from "./user.controller";
import { studentValidations } from "../student/student.validation_zod";
import validateRequest from "../../middleWare/validateRequest";
import express from "express";

const route = express.Router();

route.post(
  "/create-student",
  validateRequest(studentValidations.StudentSchemaWithZodValidation),
  userControllers.createStudent
);

export const userRouter = route;

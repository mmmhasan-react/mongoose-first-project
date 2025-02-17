import express from "express";

import { academicSemisterControllers } from "./academicSemisterController";
import validateRequest from "../../middleWare/validateRequest";
import {
  academicValidations,
  academicValidationSchemas,
} from "./academicSemister.Validation";

const router = express.Router();

router.post(
  "/create-academic-semister",
  validateRequest(academicValidations.academicValidationSchema),
  academicSemisterControllers.createAcademicSemister
);

export const academicSemisterRouters = router;

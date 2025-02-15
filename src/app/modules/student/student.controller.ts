import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";
import mongoose from "mongoose";
import catchAsync from "../../utils/catchAsync";
// import studentSchemaWithJoi from "./student.joi_validation";

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentFromDb();
  res.status(200).json({
    success: true,
    message: "get all students successfully",
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;

  const userObjectId = { _id: new mongoose.Types.ObjectId(id) };

  const result = await studentServices.getSingleStudentFromDb(userObjectId);

  res.status(200).json({
    success: true,
    message: "get single students successfully",
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await studentServices.deleteStudentFromDb(id);

  res.status(200).json({
    success: true,
    message: "student is deleted successfully",
    data: result,
  });
});

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};

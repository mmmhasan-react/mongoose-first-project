import { Request, Response } from "express";
import { studentServices } from "./student.service";
import mongoose from "mongoose";
// import studentSchemaWithJoi from "./student.joi_validation";

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDb();
    res.status(200).json({
      success: true,
      message: "get all students successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: " Student not retrive ",
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const userObjectId = { _id: new mongoose.Types.ObjectId(id) };

    const result = await studentServices.getSingleStudentFromDb(userObjectId);

    res.status(200).json({
      success: true,
      message: "get single students successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await studentServices.deleteStudentFromDb(id);

    res.status(200).json({
      success: true,
      message: "student is deleted successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};

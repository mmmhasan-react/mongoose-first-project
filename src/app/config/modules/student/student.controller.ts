import { Request, Response } from "express";
import { studentServices } from "./student.service";
import mongoose from "mongoose";
import studentSchemaWithJoi from "./student.joi_validation";
import { StudentSchemaWithZodValidation } from "./student.validation_zod";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    //joi layer
    // const { error, value } = studentSchemaWithJoi.validate(student);
    const result = StudentSchemaWithZodValidation.parse(student);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Student not created",
    //     error: error.details,
    //   });
    // }

    // const result = await studentServices.createStudentIntoDb(student);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      // data: result,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student not created",
      error: err,
    });
  }
};

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
    const result = await studentServices.getSingleStudentFromDb({
      _id: new mongoose.Types.ObjectId(id),
    });

    res.status(200).json({
      success: true,
      message: "get single students successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};

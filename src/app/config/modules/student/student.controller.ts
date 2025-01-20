import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await studentServices.createStudentIntoDb(student);
    res.status(200).json({
      status: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
};

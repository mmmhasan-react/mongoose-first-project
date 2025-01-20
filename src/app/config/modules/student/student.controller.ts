import { Request, Response } from "express";
import { studentServices } from "./student.service";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await studentServices.createStudentIntoDb(body);
    res.status(200).json({
      status: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
};

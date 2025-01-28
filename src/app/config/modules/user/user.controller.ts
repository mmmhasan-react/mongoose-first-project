import { Request, Response } from "express";
import { userServices } from "./user.service";
const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;
    console.log(password, student);

    // console.log(student);
    //joi layer
    // const { error, value } = studentSchemaWithJoi.validate(student);
    // const parseData = await StudentSchemaWithZodValidation.parse(student);
    const result = await userServices.createStudentIntoDb(password, student);
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Student not created",
      error: err,
    });
  }
};

export const userControllers = {
  createStudent,
};

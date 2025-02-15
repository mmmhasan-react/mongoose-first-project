import { RequestHandler } from "express";
import { userServices } from "./user.service";
// import sendRespnse from "../../utils/SendResponse";
// import httpStatus from "http-status";
const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDb(
      password,
      studentData
    );

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
    // sendRespnse(res, {
    //   statusCode: httpStatus.ok,
    //   success: true,
    //   message: "Student created successfully",
    //   data: result,
    // });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createStudent,
};

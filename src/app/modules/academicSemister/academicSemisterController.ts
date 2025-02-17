import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRespnse from "../../utils/SendResponse";
import { academicSemisterServices } from "./academicSemister.services";

const createAcademicSemister = catchAsync(async (req, res) => {
  console.log("req.body", req.body);
  const result = await academicSemisterServices.createAcademicSemisterIntoDb(
    req.body
  );
  sendRespnse(res, {
    statusCode: status.OK,
    success: true,
    message: "academic created",
    data: result,
  });
});

export const academicSemisterControllers = {
  createAcademicSemister,
};

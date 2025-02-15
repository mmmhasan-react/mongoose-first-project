import { Response } from "express";

type TResponse<T> = {
  success: true;
  message?: string;
  data: T;
  statusCode: number;
};
const sendRespnse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendRespnse;

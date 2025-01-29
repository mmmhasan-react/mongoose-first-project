import { NextFunction, Request, Response } from "express";

const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = 500,
    message = "something wrom";
  return res.status(statusCode).json({
    succusse: false,
    message: err.message || message,
  });
};

export default errorHandler;

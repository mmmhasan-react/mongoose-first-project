import {
  TacademicSemister,
  TAsemesterNameCode,
} from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";

const createAcademicSemisterIntoDb = async (payload: TacademicSemister) => {
  const result = await academicSemisterModel.create(payload);
  console.log("payload", payload);
  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterIntoDb,
};

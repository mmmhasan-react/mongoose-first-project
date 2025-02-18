import { academicSemisterMapper } from "./academicSemister.constant";
import { TacademicSemister } from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";

const createAcademicSemisterIntoDb = async (payload: TacademicSemister) => {
  if (academicSemisterMapper[payload.name] !== payload.code) {
    throw new Error("invalid semister code");
  }
  const result = await academicSemisterModel.create(payload);
  console.log("payload", payload);
  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterIntoDb,
};

import { RootFilterQuery } from "mongoose";
import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";
// import { StudentSchemaWithZodValidation } from "./student.validation_zod";

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDb = async (
  id: RootFilterQuery<TStudent> | undefined
) => {
  const result = await StudentModel.findById(id);
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};

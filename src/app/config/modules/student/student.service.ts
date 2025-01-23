import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDb = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDb = async (id) => {
  const result = await StudentModel.findById(id);
  return result;
};
export const studentServices = {
  createStudentIntoDb,
  getAllStudentFromDb,
  getSingleStudentFromDb,
};

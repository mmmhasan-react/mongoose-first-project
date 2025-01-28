import config from "../..";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { User } from "./user.model";
import { TUser } from "./user.type";

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  //if password is not give by user, password=default password
  userData.password = password || (config.default_password as string);
  userData.id = "1234512345";

  //set role

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }
  console.log(newUser._id);
  console.log(newUser.id);
  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};

export const userServices = {
  createStudentIntoDb,
};

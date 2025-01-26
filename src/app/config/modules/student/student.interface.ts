import { Model } from "mongoose";

export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;

  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TLocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  avatar?: string;
  blood_groups?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGurdian;
  localGuardian: TLocalGurdian;
  profileImg?: string;
  isActive: "active" | "inactive";
  isDeleted: boolean;
};

//custom method
// export type studentMethods = {
//   isUserExists(id: String): Promise<TStudent | null>;
// };
// export type StudentModels = Model<TStudent, object, studentMethods>;
//

//Statics
export interface StudentModels extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

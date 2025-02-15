import { Model, Types } from "mongoose";

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
  user: Types.ObjectId;
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
  isDeleted: boolean;
};

export interface StudentModels extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

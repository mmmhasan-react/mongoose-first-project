export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;

  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  avatar?: string;
  blood_groups?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Gurdian;
  localGuardian: LocalGurdian;
  profileImg?: string;
  isActive: "active" | "inactive";
};

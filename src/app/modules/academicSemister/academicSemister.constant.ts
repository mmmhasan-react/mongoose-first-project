import {
  TacademicSemisterNameCodeMapper,
  TAsemesterName,
  TAsemesterNameCode,
  TMonths,
} from "./academicSemister.interface";

export const months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const academicSemisterName: TAsemesterName[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const academicSemisterCode: TAsemesterNameCode[] = ["01", "02", "03"];

export const academicSemisterMapper: TacademicSemisterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

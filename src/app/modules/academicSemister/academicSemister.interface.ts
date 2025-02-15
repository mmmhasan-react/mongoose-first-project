export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type TAsemesterName = "Autumn" | "Summer" | "Fall";
export type TAsemesterNameCode = "01" | "02" | "03";

export type TacademicSemister = {
  name: TAsemesterName;
  code: TAsemesterNameCode;
  year: Date;
  statMonth: TMonths;
  endMonth: TMonths;
};

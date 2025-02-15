import { model, Schema } from "mongoose";
import {
  TacademicSemister,
  TAsemesterName,
  TAsemesterNameCode,
  TMonths,
} from "./academicSemister.interface";

const months: TMonths[] = [
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

const academicSemisterName: TAsemesterName[] = ["Autumn", "Summer", "Fall"];
const academicSemisterCode: TAsemesterNameCode[] = ["01", "03", "03"];

const academicSemisterSchema = new Schema<TacademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemisterName,
    },
    year: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCode,
    },
    statMonth: {
      type: String,
      enum: months,
    },
    endMonth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
);

export const academicSemisterModel = model<TacademicSemister>(
  "academicSemister",
  academicSemisterSchema
);

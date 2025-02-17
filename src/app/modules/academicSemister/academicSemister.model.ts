import { model, Schema } from "mongoose";
import { TacademicSemister } from "./academicSemister.interface";
import {
  academicSemisterCode,
  academicSemisterName,
  months,
} from "./academicSemister.constant";

const academicSemisterSchema = new Schema<TacademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemisterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCode,
    },
    startMonth: {
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

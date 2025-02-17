import { z } from "zod";
import {
  academicSemisterCode,
  academicSemisterName,
  months,
} from "./academicSemister.constant";

const academicValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemisterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemisterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicValidations = { academicValidationSchema };

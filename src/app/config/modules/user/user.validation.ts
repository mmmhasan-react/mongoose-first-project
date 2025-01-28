import z from "zod";
const userValidationWithZod = z.object({
  id: z.string(),
  password: z.string().max(20, { message: "password more than 20" }),
  needPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().optional().default(false),
});

export default userValidationWithZod;

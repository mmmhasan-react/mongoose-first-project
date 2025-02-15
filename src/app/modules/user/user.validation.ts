import z from "zod";
const userValidationWithZod = z.object({
  password: z.string().max(20, { message: "password more than 20" }).optional(),
});

export default userValidationWithZod;

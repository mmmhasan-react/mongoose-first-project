import { z } from "zod";

// UserName validation schema
const UserNameSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "Name must be 20 characters or less")
    .regex(/^[A-Z]/, "First character must be uppercase"),
  middleName: z
    .string()
    .min(1, "Middle name is required")
    .regex(/^[a-zA-Z0-9]*$/, "Middle name must be alphanumeric"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
});

// Guardian validation schema
const GuardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNumber: z
    .string()
    .min(1, "Father's contact number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Father's contact number must be valid"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNumber: z
    .string()
    .min(1, "Mother's contact number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Mother's contact number must be valid"),
});

// Local Guardian validation schema
const LocalGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z
    .string()
    .min(1, "Local guardian's contact number is required")
    .regex(
      /^\+?[0-9]{10,15}$/,
      "Local guardian's contact number must be valid"
    ),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Student validation schema
const StudentSchemaWithZodValidation = z.object({
  id: z.string().min(1, "Student ID is required"), // Add custom logic if necessary
  password: z.string().max(20), // Add custom logic if necessary
  name: UserNameSchema,
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"), // Optional: You could add Date parsing or validation if needed
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Contact number must be valid"),
  emergencyContactNumber: z
    .string()
    .min(1, "Emergency contact number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Emergency contact number must be valid"),
  avatar: z.string().optional(), // Optional field for avatar
  blood_groups: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    errorMap: () => ({ message: "Invalid blood group" }),
  }),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: z.string().optional(), // Optional field for profile image
  isActive: z.enum(["active", "inactive"]).default("active"),
});

export { StudentSchemaWithZodValidation };

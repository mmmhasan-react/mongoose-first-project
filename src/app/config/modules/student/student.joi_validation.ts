import Joi from "joi";

// UserName Schema
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .required()
    .pattern(/^[A-Z]/)
    .message("First name must start with an uppercase letter."),
  middleName: Joi.string().alphanum().required(),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
  }),
});

// Guardian Schema
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": "Father's occupation is required",
  }),
  fatherContactNumber: Joi.string().required().messages({
    "string.empty": "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    "string.empty": "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": "Mother's occupation is required",
  }),
  motherContactNumber: Joi.string().required().messages({
    "string.empty": "Mother's contact number is required",
  }),
});

// Local Guardian Schema
const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    "string.empty": "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Local guardian's address is required",
  }),
});

// Student Schema
const studentSchemaWithJoi = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": "Student ID is required",
  }),
  name: userNameSchema.required(),
  gender: Joi.string().valid("male", "female").required().messages({
    "any.only": "Gender must be either male or female.",
  }),
  dateOfBirth: Joi.string().required().messages({
    "string.empty": "Date of birth is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email address",
  }),
  contactNumber: Joi.string().required().messages({
    "string.empty": "Contact number is required",
  }),
  emergencyContactNumber: Joi.string().required().messages({
    "string.empty": "Emergency contact number is required",
  }),
  avatar: Joi.string().optional(),
  blood_groups: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .messages({
      "any.only": "Please provide a valid blood group",
    }),
  presentAddress: Joi.string().required().messages({
    "string.empty": "Present address is required",
  }),
  permanentAddress: Joi.string().required().messages({
    "string.empty": "Permanent address is required",
  }),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImg: Joi.string().optional(),
  isActive: Joi.string()
    .valid("active", "inactive")
    .default("active")
    .optional()
    .messages({
      "any.only": "Status must be either active or inactive",
    }),
});

export default studentSchemaWithJoi;

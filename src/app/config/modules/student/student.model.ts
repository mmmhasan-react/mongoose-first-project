import { model, Schema } from "mongoose";
import {
  studentMethods,
  StudentModels,
  TGurdian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from "./student.interface";
import validator from "validator";
import bcrypt from "bcrypt";
import config from "../..";

const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxLength: [20, "mame must be 20 character"],
    trim: true,
    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} must be first character in upper case",
    },
  },
  middleName: {
    type: String,
    required: [true, "Middle name is required"],
    validate: {
      validator: (value) => validator.isAlphanumeric(value),
      message: "{VALUE} is not alpha neumaric",
    },
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
});

const GuardianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNumber: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNumber: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const LocalGuardianSchema = new Schema<TLocalGurdian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

const StudentSchema = new Schema<TStudent, StudentModels>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    // unique: true,
    // autoIndex: true,
  },
  password: {
    type: String,
    required: [true, "password must be required"],
  },
  name: {
    type: UserNameSchema,
    required: [true, "Student's name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "{VALUE} is not a valid email address",
    },
    // index: true,
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required"],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  avatar: {
    type: String,
  },
  blood_groups: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} Please provide a valid blood group",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: GuardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: "Status must be either active or inactive",
    },
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// StudentSchema.methods.isUserExists = async function (id: string) {
//   const existUser = await StudentModel.findOne({ id });
//   return existUser;
// };

//middle ware
StudentSchema.pre("save", async function (next) {
  //hassing password and save into db
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
  next();
});

StudentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// StudentSchema.post("save", function () {
//   console.log(this, "post hook: will save data");
// });

StudentSchema.pre("find", function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre("find", function (next) {
  // console.log(this);
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

//static
StudentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};
export const StudentModel = model<TStudent, StudentModels>(
  "Student",
  StudentSchema
);

export type TUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: "adming" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

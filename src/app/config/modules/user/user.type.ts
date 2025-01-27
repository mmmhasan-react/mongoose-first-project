export type TUser = {
  id: string;
  password: string;
  needpassWordChange: boolean;
  role: "adming" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

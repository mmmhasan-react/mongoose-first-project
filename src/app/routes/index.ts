import { Router } from "express";
import { studentRouters } from "../modules/student/student.route";
import { userRouter } from "../modules/user/user.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/students",
    route: studentRouters,
  },
  {
    path: "/users",
    route: userRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";

const router = Router();

const modulesRoute = [
  {
    path: "/user",
    route: UserRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;

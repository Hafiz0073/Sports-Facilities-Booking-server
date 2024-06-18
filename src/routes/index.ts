import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { UserAuthRoutes } from "../modules/auth/auth.routes";

const router = Router();
const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: UserAuthRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use("/", UserRoutes);
export default router;

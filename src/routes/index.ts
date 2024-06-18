import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router();
const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use("/", UserRoutes);
export default router;

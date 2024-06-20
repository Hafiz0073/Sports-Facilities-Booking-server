import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { UserAuthRoutes } from "../modules/auth/auth.routes";
import { FacilityRoutes } from "../modules/facility/facility.route";

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
  {
    path: "/",
    route: FacilityRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use("/", UserRoutes);
export default router;

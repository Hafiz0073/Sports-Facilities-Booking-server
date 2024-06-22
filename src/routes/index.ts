import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { UserAuthRoutes } from "../modules/auth/auth.routes";
import { FacilityRoutes } from "../modules/facility/facility.route";
import { BookingRoute } from "../modules/booking/booking.route";

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
  {
    path: "/",
    route: BookingRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use("/", UserRoutes);
export default router;

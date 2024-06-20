/* eslint-disable no-undef */
import express from "express";
import { FacilitiesController } from "./facility.controller";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";

const router = express.Router();

router.post(
  "/facility",
  auth(USER_Role.ADMIN),
  FacilitiesController.createFacility
);

export const FacilityRoutes = router;

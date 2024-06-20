/* eslint-disable no-undef */
import express from "express";
import { FacilitiesController } from "./facility.controller";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { SportsFacilityValidations } from "./facility.validation";

const router = express.Router();

router.post(
  "/facility",
  validateRequest(SportsFacilityValidations.createFacilityValidationSchema),
  auth(USER_Role.ADMIN),
  FacilitiesController.createFacility
);
//get all facilities
router.get(
  "/facility",
  auth(USER_Role.ADMIN || USER_Role.USER),
  FacilitiesController.getAllFacilities
);

export const FacilityRoutes = router;

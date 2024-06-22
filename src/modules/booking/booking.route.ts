/* eslint-disable no-undef */
import express from "express";
// import { auth } from "../../middlewares/auth";
// import { USER_Role } from "../user/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidateCheck } from "./booking.validation";
import { BookingController } from "./booking.controller";

const router = express.Router();

router.post(
  "/bookings",
  validateRequest(BookingValidateCheck.createBookingValidationSchema),

  BookingController.createBooking
);
// router.put(
//   "/facility/:facilityId",
//   validateRequest(SportsFacilityValidations.updateFacilityValidationSchema),
//   FacilitiesController.updateFacility
// );
// //get all facilities
// router.get(
//   "/facility",
//   auth(USER_Role.ADMIN || USER_Role.USER),
//   FacilitiesController.getAllFacilities
// );
// router.get(
//   "/facility/:facilityId",

//   FacilitiesController.getSingleFacility
// );
// router.delete(
//   "/facility/:facilityId",

//   FacilitiesController.deleteFacility
// );

export const BookingRoute = router;

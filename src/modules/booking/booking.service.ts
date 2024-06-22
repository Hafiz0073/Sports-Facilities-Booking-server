import { User } from "../user/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Facility } from "../facility/facility.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createBookingAddIntoDB = async (payload: TBooking) => {
  const { user, facility } = payload;

  //user existing check
  const isUserExits = await User.findById(user);

  if (!isUserExits) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found !");
  }
  //facility existing check
  const isFacilityExits = await Facility.findById(facility);

  if (!isFacilityExits) {
    throw new AppError(httpStatus.NOT_FOUND, "Facility  not found !");
  }

  if (payload.startTime > payload.endTime) {
    throw new Error("starting time must be  greater then end time");
  }
  const result = await Booking.create({ ...payload, user });

  return result;
};
export const BookingService = {
  createBookingAddIntoDB,
};

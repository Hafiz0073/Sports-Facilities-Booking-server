import { Types } from "mongoose";
import { BookingStatus } from "./booking.constant";

export type TBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount: number;
  isBooked: keyof typeof BookingStatus;
};

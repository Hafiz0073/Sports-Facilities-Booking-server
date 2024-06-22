import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";
import { BookingStatus } from "./booking.constant";

const bookingSchema = new Schema<TBooking>({
  date: {
    type: String,
    required: [true, "date is required"],
  },
  startTime: {
    type: String,
    required: [true, "start time is required"],
  },
  endTime: {
    type: String,
    required: [true, "start time is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user is required"],
    unique: true,
    ref: "User",
  },
  facility: {
    type: Schema.Types.ObjectId,
    required: [true, "facility is required"],
    unique: true,
    ref: "Facility",
  },
  payableAmount: {
    type: Number,
    required: [true, "payable amount is required"],
  },
  isBooked: {
    type: String,
    required: [true, "Booking status is required"],
    enum: Object.keys(BookingStatus),
  },
});
export const Booking = model<TBooking>("Booking", bookingSchema);

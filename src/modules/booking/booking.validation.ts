import { z } from "zod";
import { BookingStatus } from "./booking.constant";

// Define the validation schema
const createBookingValidationSchema = z.object({
  // body: z.object({}).refine((body) => {
  //   const start = new Date(`1970-01-01T ${body.startTime}:00`);
  //   const end = new Date(`1970-01-01T ${body.endTime}:00`);
  //   return end > start;
  // }),
  body: z.object({
    date: z.string().refine(
      (dateQuery) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
        return regex.test(dateQuery);
      },
      {
        message: "Invalid date format. Expected format: YYYY-MM-DD.",
      }
    ),

    startTime: z.string().refine(
      (time) => {
        const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
        return regex.test(time);
      },
      {
        message:
          "Invalid date time format for startTime expected format YYYY-MM-DDTHH:MM:SSZ.",
      }
    ),
    endTime: z.string().refine(
      (time) => {
        const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
        return regex.test(time);
      },
      {
        message: "Invalid datetime format for endTime.",
      }
    ),

    user: z.string().nonempty({ message: "User ID is required." }),
    facility: z.string().nonempty({ message: "Facility ID is required." }),
    payableAmount: z
      .number()
      .positive({ message: "Payable amount must be a positive number." }),
    isBooked: z.nativeEnum(BookingStatus, {
      message: "Invalid booking status.",
    }),
  }),
});

// Export the validation schema
export const BookingValidateCheck = {
  createBookingValidationSchema,
};

export const BookingValidate = {
  createBookingValidationSchema,
};

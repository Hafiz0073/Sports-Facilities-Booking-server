import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { BookingService } from "./booking.service";
import catchAsync from "../../utils/catchAsync";

//create admin
const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBookingAddIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});
export const BookingController = {
  createBooking,
};

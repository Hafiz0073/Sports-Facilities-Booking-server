import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SportsFacility } from "./facility.service";

//create admin
const createFacility = catchAsync(async (req, res) => {
  const result = await SportsFacility.createFacilityAddIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility added successfully",
    data: result,
  });
});
//get all facilities
const getAllFacilities = catchAsync(async (req, res) => {
  const result = await SportsFacility.getAllFacilitiesFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facilities retrieved successfully",
    data: result,
  });
});
//single id
const getSingleFacility = catchAsync(async (req, res) => {
  const { facilityId } = req.params;
  const result = await SportsFacility.getSingleFacilityFromDB(facilityId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "specific Academic department got successfully",
    data: result,
  });
});
//update facility
const updateFacility = catchAsync(async (req, res) => {
  const { facilityId } = req.params;
  const result = await SportsFacility.updateFacilityIntoDB(
    facilityId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility updated successfully",

    data: result,
  });
});
//deleted facility
const deleteFacility = catchAsync(async (req, res) => {
  const { facilityId } = req.params;
  const result = await SportsFacility.deleteFacilityFromDB(facilityId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility deleted successfully",
    data: result,
  });
});
export const FacilitiesController = {
  createFacility,
  updateFacility,
  getAllFacilities,
  getSingleFacility,
  deleteFacility,
};

import mongoose from "mongoose";
import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createFacilityAddIntoDB = async (payload: TFacility) => {
  const facilityName = await Facility.findOne({ name: payload.name });
  if (facilityName) {
    throw new Error("Name Already exist");
  }
  const result = await Facility.create(payload);

  return result;
};
//facilities update
const updateFacilityIntoDB = async (_id: string, payload: TFacility) => {
  const update = await Facility.findByIdAndUpdate({ _id }, payload);
  return update;
};
const getSingleFacilityFromDB = async (id: string) => {
  const result = await Facility.findById(id);
  return result;
};
//get all facilities
const getAllFacilitiesFromDb = async () => {
  const result = await Facility.find();
  return result;
};
//delete a facility softly
const deleteFacilityFromDB = async (_id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedFacilityFromDb = await Facility.findOneAndUpdate(
      { _id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedFacilityFromDb) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete Facility");
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedFacilityFromDb;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to delete facility");
  }
};

export const SportsFacility = {
  createFacilityAddIntoDB,
  updateFacilityIntoDB,
  getAllFacilitiesFromDb,
  getSingleFacilityFromDB,
  deleteFacilityFromDB,
};

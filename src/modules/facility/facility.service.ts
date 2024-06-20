import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

const createFacilityAddIntoDB = async (payload: TFacility) => {
  const facilityName = await Facility.findOne({ name: payload.name });
  if (facilityName) {
    throw new Error("Name Already exist");
  }
  const result = await Facility.create(payload);

  return result;
};
const getAllFacilitiesFromDb = async () => {
  const result = await Facility.find();
  return result;
};

export const SportsFacility = {
  createFacilityAddIntoDB,
  getAllFacilitiesFromDb,
};

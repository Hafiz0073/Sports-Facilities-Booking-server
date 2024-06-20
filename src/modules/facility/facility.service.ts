import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

const createFacilityAddIntoDB = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};
const facilitiesFromDb = async () => {
  const result = await Facility.find();
  return result;
};

export const SportsFacility = {
  createFacilityAddIntoDB,
  facilitiesFromDb,
};

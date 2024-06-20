import { Schema, model } from "mongoose";
import { TFacility } from "./facility.interface";

const FacilitySchema = new Schema<TFacility>({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },

  description: {
    type: String,
    required: [true, "description is required"],
  },
  pricePerHour: {
    type: Number,
    required: [true, "price is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
});
export const Facility = model<TFacility>("Facility", FacilitySchema);

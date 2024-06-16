import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import { USER_Role, USER_Status } from "./user.constant";
import bcryptjs from "bcryptjs";
import config from "../../config";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: 0,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: Object.keys(USER_Role),
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  status: {
    type: String,
    required: [true, "Status is Default"],
    enum: Object.keys(USER_Status),
    default: "ACTIVE",
  },
  passwordChangedAt: {
    type: Date,
  },
});

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcryptjs.hash(user.password, Number(config.salt_round));
  next();
});
userSchema.post("save", async function (doc, next) {
  (doc.password = " "), next();
});
export const User = model<TUser>("User", userSchema);

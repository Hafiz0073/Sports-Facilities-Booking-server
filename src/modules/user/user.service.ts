import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAminIntoDB = async (payload: TUser) => {
  const admin = await User.create(payload);
  return admin;
};
const updateUser = async (_id: string, payload: TUser) => {
  const update = await User.findByIdAndUpdate({ _id }, payload);
  return update;
};

export const UserServices = {
  createAminIntoDB,
  updateUser,
};

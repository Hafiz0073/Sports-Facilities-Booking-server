import { USER_Role, USER_Status } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: keyof typeof USER_Role;
  address: string;
  status: keyof typeof USER_Status;
  passwordChangedAt: Date;
};

export type TLoginUser = {
  email: string;
  password: string;
};

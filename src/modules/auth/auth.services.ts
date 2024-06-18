import { USER_Role } from "../user/user.constant";
import { TLoginUser, TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { isPasswordMatched } from "./auth.utils";
import config from "../../config";
import jwt from "jsonwebtoken";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const register = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new Error("User Already exist");
  }
  //set user role
  payload.role = USER_Role.USER;
  //create user
  const newUser = await User.create(payload);
  return newUser;
};
//login route setup
const login = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new Error("User not found");
  }
  //check active or blocked
  if (user.status === "BLOCKED") {
    throw new Error("User is blocked");
  }
  //password matched checking
  const passwordMatched = await isPasswordMatched(
    payload.password,
    user.password
  );
  if (!passwordMatched) {
    throw new Error("Password don't matched");
  }
  //jwt token
  const jwtpayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtpayload, config.jwt_access_secret as string, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign(
    jwtpayload,
    config.jwt_refresh_secret as string,
    { expiresIn: "7d" }
  );
  return {
    accessToken,
    refreshToken,
  };
};
export const UserServicesAuth = {
  register,
  login,
};

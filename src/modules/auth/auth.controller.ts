import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServicesAuth } from "./auth.services";
import config from "../../config";

const register = catchAsync(async (req, res) => {
  const result = await UserServicesAuth.register(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Register created successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await UserServicesAuth.login(req.body);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Register login successfully",
    data: { accessToken },
  });
});
export const UserControllerAuth = {
  register,
  login,
};

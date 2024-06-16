import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

//create admin
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createAminIntoDB(req.body);
    // res.status(200).json({
    //   success: true,
    //   message: "User created successfully",
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: unknown) {
    next(error);
  }
};
//update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.updateUser(userId, req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const UserController = {
  createAdmin,
  updateUser,
};

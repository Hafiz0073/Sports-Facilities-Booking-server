import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SportsFacility } from "./facility.service";

//create admin
const createFacility = catchAsync(async (req, res) => {
  const result = await SportsFacility.createFacilityAddIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility created successfully",
    data: result,
  });
});
//get all facilities
const getAllFacilities = catchAsync(async (req, res) => {
  const result = await SportsFacility.getAllFacilitiesFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "all facilities get successfully",
    data: result,
  });
});
//update User
// const updateUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const result = await UserServices.updateUser(userId, req.body);
//     res.status(200).json({
//       success: true,
//       message: "User created successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "something went wrong",
//       error: error,
//     });
//   }
// };

export const FacilitiesController = {
  createFacility,
  getAllFacilities,
};

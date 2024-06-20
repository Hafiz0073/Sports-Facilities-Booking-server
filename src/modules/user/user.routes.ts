/* eslint-disable no-undef */
import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { User } from "./user.model";

const router = express.Router();
router.post(
  "/create-admin",
  validateRequest(UserValidation.createAdminValidationSchema),
  async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verifiedToken = jwt.verify(
        token as string,
        config.jwt_access_secret as string
      );
      const { role, email } = verifiedToken as JwtPayload;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("You are not user");
      }
      if (user.role !== role) {
        throw new Error("you are not authorized to create admin");
      }
      if (role !== "ADMIN") {
        throw new Error("you are not authorized to create admin");
      }
      console.log(verifiedToken);
      console.log(token);
    } catch (error) {
      next(error);
    }
  },
  UserController.createAdmin
);
router.put("/:userId", UserController.updateUser);

export const UserRoutes = router;

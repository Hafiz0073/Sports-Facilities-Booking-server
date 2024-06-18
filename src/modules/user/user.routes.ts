import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();
router.post(
  "/signup",
  validateRequest(UserValidation.createAdminValidationSchema),
  UserController.createAdmin
);
router.put("/:userId", UserController.updateUser);

export const UserRoutes = router;

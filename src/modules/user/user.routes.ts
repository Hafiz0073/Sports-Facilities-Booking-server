import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();
router.post("/signup", UserController.createAdmin);
router.put("/:userId", UserController.updateUser);

export const UserRoutes = router;

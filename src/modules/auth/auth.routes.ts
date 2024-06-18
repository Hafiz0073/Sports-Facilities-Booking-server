import express from "express";
import { UserControllerAuth } from "./auth.controller";

const router = express.Router();
router.post("/register", UserControllerAuth.register);
router.post("/login", UserControllerAuth.login);

export const UserAuthRoutes = router;

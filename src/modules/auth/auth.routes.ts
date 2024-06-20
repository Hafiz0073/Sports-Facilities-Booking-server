import express from "express";
import { UserControllerAuth } from "./auth.controller";

const router = express.Router();
router.post("/signup", UserControllerAuth.register);
router.post("/login", UserControllerAuth.login);

export const UserAuthRoutes = router;

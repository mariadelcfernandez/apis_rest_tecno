import {Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", authController.login);
 
router.post("/logout", authController.logout);
//router.post("/register", authController.register);

//router.get("/profile", authController.profile);
//router.get("/logout", authController.logout);
//router.get("/login", authController.login);
//router.get("/register", authController.register);
//router.get("/profile", authController.profile);

export default router;
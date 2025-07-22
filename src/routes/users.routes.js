import { authMiddleware } from "../middlewares/auth.middleware.js"; 
import { Router } from "express";
import userController from "../controllers/users.controller.js";

const router = Router();

router.get("/", authMiddleware, userController.getAllUsers);
router.get("/:id", authMiddleware, userController.getUserById);
router.post("/", authMiddleware, userController.createUser);
router.put("/:id", authMiddleware, userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);

export default router;
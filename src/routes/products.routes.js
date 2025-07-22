import { Router } from "express";
import productController from "../controllers/products.controller.js";


const router = Router();

router.get("/", productController.getAllProduct);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id",productController.updateProduct); 
router.get("/:id", productController.getProductById);

export default router;
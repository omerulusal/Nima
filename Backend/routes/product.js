import express from 'express';
import { createProduct, allProducts, adminProduct, detailProduct, deleteProduct, updateProduct, createReview } from "../controllers/product.js";
import { authMidware, roleChecked } from '../middleware/auth.js';

const router = express.Router();

router.get("/products", allProducts);

router.get("/admin/products", authMidware, roleChecked("admin"), adminProduct);

router.get("/products/:id", detailProduct);

router.post("/product/new", authMidware, roleChecked("admin"), createProduct);

router.delete("/products/:id", authMidware, roleChecked("admin"), deleteProduct);

router.put("/products/:id", authMidware, roleChecked("admin"), updateProduct)

router.post("/products/newReview", authMidware, createReview);


export default router;
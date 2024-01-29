import express from 'express';
import { createProduct, allProducts, adminProduct, detailProduct, deleteProduct,updateProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/products", allProducts);

router.get("/admin/products", adminProduct);

router.get("/products/:id", detailProduct);

router.post("/product/new", createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct)


export default router;
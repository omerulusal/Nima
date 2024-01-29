import express from 'express';
import { register, login, logout, forgotPassword, resetPassword, userDetail } from "../controllers/user.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgot", forgotPassword);
router.post("/reset", resetPassword);
router.get("/me/:id", userDetail);

export default router;
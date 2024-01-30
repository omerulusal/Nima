import User from "../models/user.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email })
    //User modelimde gelen emaile sahip bir kullanıcının olup olmadıgını kontrol ediyorum
    if (user) {
        return res.status(404).json({
            message: 'Boyle bir kullanici zaten var!'
        })
    }

    const passwordHash = await bcrypt.hash(password, 10);
    if (password.length < 6) {
        return res.status(404).json({
            message: "Sifre en az 6 karakter olmalıdır"
        })
    }
    try {
        const newUser = await User.create({
            name, email, password: passwordHash
        })

        const token = await jwt.sign({ id: newUser._id }, "SECRETTOKEN", { expiresIn: "1h" });
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
        }

        res.status(201).cookie("token", token,cookieOptions).json({
            newUser,
            token
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Kullanıcı Oluşturma Hatası",
        });
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        res.status(200).json({
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Giriş Yapılamadı",
        });
    }
}


const logout = async (req, res) => {
    try {
        res.status(200).json({
            message: "Cıkış işlemi Başarılı"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Cıkış Yapılamadı",
        });
    }
}


const forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })//userın gonderdigi emaile gore sorgu yap
        if (!user) {
            return res.status(404).json({
                error: "Kullanıcı Bulunamadı",
            });
        }
        res.status(200).json({
            message: "Mailinizi Kontrol ediniz"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Cıkış Yapılamadı",
        });
    }
}


const resetPassword = async (req, res) => {
    try {
        // ! jwt kullanacgım
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(500).json({ message: "Gecersiz Token" });
        }
        res.status(200).json({
            message: "Mailinizi Kontrol ediniz"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Gecersiz Token",
        });
    }
}

const userDetail = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Böyle bir kullanıcı bulunmamakta",
        });
    }
}


export { register, login, logout, forgotPassword, resetPassword, userDetail };
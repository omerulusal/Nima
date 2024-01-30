import User from "../models/user.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const register = async (req, res, next) => {
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
        res.status(201).cookie("token", token, cookieOptions).json({
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
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({
                message: "Giris Yapılamadı"
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        // disaridan gelen sifre ile kayitli olanı kıyaslıyorum(bcrypt.compare karşılaştırır.)
        if (!passwordMatch) {
            return res.status(404).json({
                message: "Giris Yapılamadı"
            })
        }
        const token = await jwt.sign({ id: user._id }, "SECRETTOKEN", { expiresIn: "1h" });
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
        }
        res.status(200).cookie("token", token, cookieOptions).json({
            // sırasıyla token adında bir cerez oluşturdum bunun verileri token degişkeninden gelir ve özellikleri ise cookieOptionstan gelir
            user,
            token
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
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now())
        }
        // kullanıcı çıkış yaptıgından çerezi temizledim
        res.status(200).cookie("token", null, cookieOptions).json({
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
    const resetPassToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
        resetPassToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    if (!user) {
        return res.status(404).json({ message: "Gecersiz Token" });
    }
    const token = await jwt.sign({ id: user._id }, "SECRETTOKEN", { expiresIn: "1h" });
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    }
    res.status(200).cookie("token", token, cookieOptions).json({
        user,
        token
    })
}

const userDetail = async (req, res, next) => {
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
/*
! crypto.createHash("sha256"): SHA-256 algoritmasını kullanıp kriptografik hash nesnesi oluşturur. 
!digest("hex"): Oluşturulan hash nesnesini, hex formatında bir string olarak döndürür. 
!Bu, token'ın daha okunabilir bir formda olmasını sağlar.
*/
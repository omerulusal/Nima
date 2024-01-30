import User from "../models/user.js";
import jwt from "jsonwebtoken";

const authMidware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        res.status(500).json({
            message: "Lutfen Giriş Yapınız"
        })
    }
    const decodedData = jwt.verify(token, "SECRETTOKEN")
    // contorllerstaki user.jste olusturdugum SECRETTOKEN'i verdim.

    if (!decodedData) {
        return res.status(500).json({ message: 'Token Gecersizdir.' });
    }
    req.User = await User.findById(decodedData.id);
    // tokendan gelen idye gore userlari buldum.
    next();
}

const roleChecked = (...roles) => {
    // gelen istegin admin rolu icerip icermedigini kontrol ediyorum.
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(500).json({ message: "Giris icin izniniz bulunmamaktadir" });
        }
        next()
    }
}

export { authMidware, roleChecked };
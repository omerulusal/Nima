import User from "../models/user.js";

const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({
            user
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
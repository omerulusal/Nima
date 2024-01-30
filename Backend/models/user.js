import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        public_id: {
            type: String,
            required: false
            // şimdilik false yaptım
        },
        url: {
            type: String,
            required: false
            // şimdilik false yaptım
        }
    },
    role: {
        type: String,
        default: "user",
        required: true
    },
    resetPassToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

export default mongoose.model('User', userSchema);
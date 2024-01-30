import express from "express";
import product from "./routes/product.js";
import user from "./routes/user.js";
import db from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();
// ortam değişkenlerine erişmek için kullanılan modüldür.

cloudinary.config({
    cloud_name: 'de9upaogi',
    api_key: '848447585291296',
    api_secret: 'TJHC80ECAGm31Rp-KbAS6yZx9aA',
});
console.log(cloudinary.config().cloud_name);

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cookieParser());
// çerezleri okumak ve yönetmek için kullanılan bir middlewaredir.
app.use(express.json());

app.use("/", product)
app.use("/", user)

db();

app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`);
})
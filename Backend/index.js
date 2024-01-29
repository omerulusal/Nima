import express from "express";
import product from "./routes/product.js";
import user from "./routes/user.js";
import db from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();
// ortam değişkenlerine erişmek için kullanılan modüldür.

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


app.use(express.json());
app.use("/", product)
app.use("/", user)

db();

app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`);
})
import express from "express";
import product from "./routes/product.js";
import user from "./routes/user.js";
import db from "./config/db.js";

const app = express();

app.use(express.json());

app.use("/", product)
app.use("/", user)

db();

app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`);
})
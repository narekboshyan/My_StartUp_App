import express from "express";
import dotenv from "dotenv";
import { data } from "../data";

import connectDB from "../config/database";

dotenv.config();
connectDB(process.env.MONGO_URI!);

const app = express();

app.get("/", (req, res) => {
    res.json({ data });
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});

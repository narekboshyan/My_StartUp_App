"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("../data");
const database_1 = __importDefault(require("../config/database"));
dotenv_1.default.config();
(0, database_1.default)(process.env.MONGO_URI);
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({ data: data_1.data });
});
app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});

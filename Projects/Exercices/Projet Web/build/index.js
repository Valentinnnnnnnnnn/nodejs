"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "src/views");
app.get("/", (req, res) => {
    res.render("index", { title: "Hello, World!" });
});
app.listen(3000, () => { });

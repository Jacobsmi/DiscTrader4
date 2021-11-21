"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send({ "status": "success" }).status(200);
});
app.post("/signin", function (req, res) {
    res.send({ status: "failure" });
});
app.listen(5000, function () { console.log("Server is listening at http://localhost:5000"); });

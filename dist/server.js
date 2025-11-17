"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
let users = [];
//1
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});
app.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!",
    });
});
//2
app.get("/echo/:id", (req, res) => {
    res.json({
        id: req.params.id,
    });
});
//3
app.post("/sum", (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers)) {
        return res.status(400).json({
            error: "Request body must contain a 'numbers' array",
        });
    }
    if (!numbers.every((num) => typeof num === "number")) {
        return res.status(400).json({
            error: "All elements in 'numbers' must be numbers",
        });
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    res.json({
        sum: sum,
    });
});
//4
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    // Validation
    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required",
        });
    }
    // Create new user
    const newUser = { name, email };
    users.push(newUser);
    res.json({
        message: "User successfully added",
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
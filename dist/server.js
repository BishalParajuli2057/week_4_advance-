"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware for parsing JSON in POST requests
app.use(express_1.default.json());
// Root route for CodeGrade detection
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});
// Hello world route
app.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!",
    });
});
// 2. ID echoing route
app.get("/echo/:id", (req, res) => {
    res.json({
        id: req.params.id,
    });
});
// 3. POST sum route
app.post("/sum", (req, res) => {
    const { numbers } = req.body;
    // Validate that numbers is an array
    if (!Array.isArray(numbers)) {
        return res.status(400).json({
            error: "Request body must contain a 'numbers' array",
        });
    }
    // Validate that all elements are numbers
    if (!numbers.every((num) => typeof num === "number")) {
        return res.status(400).json({
            error: "All elements in 'numbers' must be numbers",
        });
    }
    // Calculate sum
    const sum = numbers.reduce((total, num) => total + num, 0);
    res.json({
        sum: sum,
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
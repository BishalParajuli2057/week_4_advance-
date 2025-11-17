import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => res.send("Server is up"));
app.get("/hello", (_req, res) => res.json({ msg: "Hello world!" }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

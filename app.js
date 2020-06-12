const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello, World"
    });
});

app.get("/pow", (req, res) => {
    const { num } = req.query;
    return res.status(200).json({
        result: num * num
    });
});

module.exports = app;
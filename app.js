const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h1>QuickTill Checkout Service</h1>
        <h2>Version 1.0</h2>
        <p>Status: Running</p>
        <p>Deployment Slot: Blue</p>
    `);
});

// Health Check Endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        version: "1.0",
        database: "connected",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`QuickTill running on port ${PORT}`);
});
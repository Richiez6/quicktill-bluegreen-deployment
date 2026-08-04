const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home Page
const deploymentSlot = process.env.DEPLOYMENT_SLOT || "Unknown";
app.get("/", (req, res) => {
    res.send(`
        <h1>QuickTill Checkout Service</h1>
        <h2>Version 1.2</h2>
        <p>Status: Running</p>
        <p>Deployment Slot: ${deploymentSlot}</p>
    `);
});

// Health Check Endpoint
app.get("/health", (req, res) => {
    res.status(500).json({
        status: "unhealthy",
    });
});

app.listen(PORT, () => {
    console.log(`QuickTill running on port ${PORT}`);
});
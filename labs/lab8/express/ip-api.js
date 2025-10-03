import express from "express";
import axios from "axios";

let app = express();
let PORT = 8082;

async function fetchIp() {
    try {
        let response = await axios.get("https://httpbin.org/ip");
        return response.data.origin;
    } catch (error) {
        throw new Error(error.message || "Unknown error occurred");
    }
}

app.get("/ip", async (req, res, next) => {
    try {
        let ip = await fetchIp();
        res.json({
            ip: ip,
            source: "httpbin.org"
        });
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Failed to fetch IP address",
        message: err.message
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err.message);
        process.exit(1);
    }
    console.log(`Server running at http://localhost:${PORT}/ip`);
});

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require("path");

// The Secret Flag
const FLAG = process.env.FLAG || "CTF{TEST_FLAG_LOCALLY}";

// Note: In Netlify Functions, we go up one level (..) to find the public folder
const publicPath = path.join(__dirname, '..', 'public');

app.all("/", (req, res) => {
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", FLAG);
    return res.status(200).end();
  }
  // Serve the UI for normal visits
  res.sendFile(path.join(publicPath, 'index.html'));
});

// IMPORTANT: Do NOT use app.listen()
// Instead, we export the 'handler' for Netlify to use
module.exports.handler = serverless(app);
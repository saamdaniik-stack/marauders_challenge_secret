const express = require("express");
const app = express();
const path = require("path");

const FLAG = process.env.FLAG || "EXC{th3_r34l_fl@g!}";

// --- FIX IS HERE: The Flag Logic comes FIRST ---
app.all("/", (req, res, next) => {
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", FLAG);
    return res.status(200).end(); // We stop here, so static files don't interfere
  }
  next(); // If it's NOT a HEAD request, let the Public Folder handle it
});

// --- Public Folder comes SECOND ---
app.use(express.static('public'));

app.listen(3000, () => { console.log("Server is running!"); });
export default function handler(req, res) {
  // ----------------------------------------------------
  // SCENARIO 1: The CTF Challenge (HEAD Request)
  // ----------------------------------------------------
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    return res.status(200).end();
  }

  // ----------------------------------------------------
  // SCENARIO 2: The Website (GET Request)
  // ----------------------------------------------------
  // We serve the HTML directly here to prevent 404 errors
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marauder's Map</title>
        <style>
            body { background: #111; color: #d4af37; font-family: Courier, monospace; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            h1 { border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
        </style>
    </head>
    <body>
        <div>
            <h1>I solemnly swear that I am up to no good.</h1>
            <p>The secrets are hidden in the headers...</p>
        </div>
    </body>
    </html>
  `);
}
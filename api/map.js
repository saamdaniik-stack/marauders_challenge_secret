export default function handler(req, res) {
  // ----------------------------------------------------
  // 1. CTF CHALLENGE: The Hidden Flag (HEAD Request)
  // ----------------------------------------------------
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    return res.status(200).end();
  }

  // ----------------------------------------------------
  // 2. BROWSER PAGE: The Visual Interface (GET Request)
  // ----------------------------------------------------
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marauder's Map</title>
        <style>
            body { background-color: #0f0f0f; color: #d4af37; font-family: 'Courier New', monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
            h1 { letter-spacing: 2px; text-transform: uppercase; border-bottom: 1px solid #d4af37; padding-bottom: 10px; }
            p { opacity: 0.7; }
        </style>
    </head>
    <body>
        <h1>I solemnly swear that I am up to no good.</h1>
        <p>(The secrets are hidden in the headers...)</p>
    </body>
    </html>
  `);
}
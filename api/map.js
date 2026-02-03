export default function handler(req, res) {
  // 1. Handle the Secret Flag (HEAD request)
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    return res.status(200).end();
  }

  // 2. Handle the Website (GET request)
  // Since the rewrite blocks index.html, we render the HTML right here:
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marauders Map</title>
    </head>
    <body>
        <h1>I solemnly swear that I am up to no good.</h1>
    </body>
    </html>
  `);
}
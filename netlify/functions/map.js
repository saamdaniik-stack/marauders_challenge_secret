export const handler = async (event, context) => {
  // ----------------------------------------------------
  // 1. CTF CHALLENGE: The Hidden Flag (HEAD Request)
  // ----------------------------------------------------
  if (event.httpMethod === "HEAD") {
    return {
      statusCode: 200,
      headers: {
        "X-Marauders-Map": "EXC{th3_r34l_fl@g!}"
      },
      body: "" // HEAD requests must have an empty body
    };
  }

  // ----------------------------------------------------
  // 2. BROWSER PAGE: The Visual Interface (GET Request)
  // ----------------------------------------------------
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Marauder's Map</title>
          <style>
              body { background-color: #0f0f0f; color: #d4af37; font-family: monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
              h1 { border-bottom: 1px solid #d4af37; padding-bottom: 10px; }
          </style>
      </head>
      <body>
          <h1>I solemnly swear that I am up to no good.</h1>
          <p>(Netlify Edition)</p>
      </body>
      </html>
    `
  };
};
export default function handler(req, res) {
  if (req.method === "HEAD") {
    // Setting the custom header for the flag
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    // HEAD requests MUST NOT return a body, so we use .end()
    return res.status(200).end();
  }

  // Fallback for GET or other methods
  return res.status(404).send("Nothing here");
}

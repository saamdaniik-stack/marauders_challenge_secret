export default function handler(req, res) {
  if (req.method === "HEAD") {
    // This provides the flag in the response headers
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    return res.status(200).end();
  }

  // Normal browser requests will fall through to your index.html
  return res.status(404).end();
}
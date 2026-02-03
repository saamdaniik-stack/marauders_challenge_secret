export default function handler(req, res) {
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    return res.status(200).end();
  }

  return res.status(404).send("Nothing here");
}

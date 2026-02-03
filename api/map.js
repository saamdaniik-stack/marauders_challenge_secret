export default function Home() {
  // No body is required for HEAD requests; a minimal page for GET is fine.
  return null;
}

export async function getServerSideProps({ req, res }) {
  // When curl -I hits the root it issues a HEAD request.
  if (req.method === "HEAD") {
    res.setHeader("X-Marauders-Map", "EXC{th3_r34l_fl@g!}");
    // Ensure a successful status for the HEAD response.
    res.statusCode = 200;
    // Do not return a body — Next.js will omit the body for HEAD.
    return { props: {} };
  }

  // Normal GET behavior (no special header)
  return { props: {} };
}

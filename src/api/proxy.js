// /api/proxy.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const targetUrl =
    "https://pharma-check.onrender.com" + req.url.replace("/api", "");

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        // Add any other necessary headers
      },
      body:
        req.method !== "GET" && req.method !== "HEAD"
          ? JSON.stringify(req.body)
          : undefined,
    });

    const data = await response.text();
    const contentType = response.headers.get("content-type");
    res.setHeader("Content-Type", contentType);

    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}

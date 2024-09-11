// // /api/proxy.js
// import fetch from "node-fetch";

// export default async function handler(req, res) {
//   const targetUrl =
//     "https://pharma-check.onrender.com" + req.url.replace("/api", "");

//   try {
//     const response = await fetch(targetUrl, {
//       method: req.method,
//       headers: {
//         "Content-Type": "application/json",
//         // Add any other necessary headers
//       },
//       body:
//         req.method !== "GET" && req.method !== "HEAD"
//           ? JSON.stringify(req.body)
//           : undefined,
//     });

//     const data = await response.text();
//     const contentType = response.headers.get("content-type");
//     res.setHeader("Content-Type", contentType);

//     res.status(response.status).send(data);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while fetching data" });
//   }
// }

// /api/proxy.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const targetUrl =
    "https://pharma-check.onrender.com" + req.url.replace("/api", "");

  console.log("Proxying request to:", targetUrl);

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

    const contentType = response.headers.get("content-type");
    console.log("Response content type:", contentType);

    const data = await response.text();
    console.log("Response data:", data.substring(0, 200) + "..."); // Log first 200 characters

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.setHeader("Content-Type", contentType);
    res.status(response.status).send(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}

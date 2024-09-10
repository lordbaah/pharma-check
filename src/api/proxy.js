// /src/api/proxy.js or /pages/api/proxy.js (depending on your project structure)
// import fetch from "node-fetch";

// export default async function handler(req, res) {
//   const { query } = req;
//   const apiUrl = `https://pharma-check.onrender.com${req.url.replace(
//     "/api",
//     ""
//   )}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: req.method,
//       headers: req.headers,
//     });

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// }

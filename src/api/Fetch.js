export const getRequest = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

// export const url = "https://pharma-check.onrender.com";
// // export const url = "/api";
// // export const url = "http://localhost:3000";
// // console.log(url);

// export const getRequest = async (url) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error: Status ${response.status}`);
//   }

//   // Check the content type before attempting to parse JSON
//   const contentType = response.headers.get("content-type");

//   if (contentType && contentType.includes("application/json")) {
//     return response.json();
//   } else {
//     // If the response is not JSON, return the raw text
//     const textResponse = await response.text();
//     console.log("Raw response: ", await response.text());
//     throw new Error(`Response is not JSON: ${textResponse}`);
//   }
// };

// export const getRequest = async (url) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error: Status ${response.status}`);
//   }

//   return response.json();
// };

// // export const url = "https://pharma-check.onrender.com";
// // export const url = "/api";
// // export const url = "http://localhost:3000";
// // console.log(url);

export const getRequest = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  // Ensure response is JSON
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  } else {
    throw new Error("Response is not JSON");
  }
};

// export const getRequest = async (url) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error: Status ${response.status}`);
//   }

//   return response.json();
// };

// export const url = "https://pharma-check.onrender.com";
// // export const url = "http://localhost:3000";

const API_URL = import.meta.env.PROD
  ? "/api"
  : "https://pharma-check.onrender.com";

export const getRequest = async (path) => {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    console.log("Response status:", response.status);
    console.log(
      "Response headers:",
      Object.fromEntries(response.headers.entries())
    );
    const responseText = await response.text();
    console.log("Response text:", responseText);
    throw new Error(
      `HTTP error: Status ${response.status}, Body: ${responseText}`
    );
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    console.log("Unexpected content type:", contentType);
    const responseText = await response.text();
    console.log("Response text:", responseText);
    throw new Error(
      `Unexpected content type: ${contentType}, Body: ${responseText}`
    );
  }
};

// Use empty string as base URL since we're using relative paths
export const url = "";

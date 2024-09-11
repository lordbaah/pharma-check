// export const getRequest = async (url) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error: Status ${response.status}`);
//   }

//   return response.json();
// };

// export const url = "https://pharma-check.onrender.com";
// // export const url = "/api";
// // export const url = "http://localhost:3000";
// // console.log(url);

export const getRequest = async (path) => {
  const response = await fetch(`/api${path}`);

  if (!response.ok) {
    console.log("Response status:", response.status);
    console.log("Response text:", await response.text());
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    throw new Error("Oops, we haven't got JSON!");
  }
};

// Use empty string as base URL since we're using relative paths
export const url = "";

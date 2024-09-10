export const getRequest = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

// const url = "http://localhost:3000";
// const url = "https://pharma-check.onrender.com";

export const url = "http://localhost:3000";

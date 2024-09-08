import React, { createContext, useState, useCallback, useRef } from "react";
import { getRequest } from "../utilis/Fetch";

// const url = "http://localhost:3000";
const url = "https://pharma-check.onrender.com";

// Create the context for symptom-based drug search
export const SymptomsContext = createContext();

const SymptomsProvider = ({ children }) => {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchingRef = useRef(false);

  // Function to fetch drugs based on symptoms
  const fetchDrugsBySymptoms = useCallback(async (query) => {
    console.log("fetchDrugsBySymptoms called with query:", query);
    if (!query || fetchingRef.current) {
      console.log("Skipping fetch: No query provided or already fetching");
      return;
    }

    fetchingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching data from API");
      const drugsData = await getRequest(
        `${url}/search?q=${encodeURIComponent(query)}`
      );
      console.log("Received data:", drugsData);
      setDrugs(drugsData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
      fetchingRef.current = false;
    }
  }, []);

  // console.log(
  //   "SymptomsProvider render - Loading:",
  //   loading,
  //   "Drugs:",
  //   drugs,
  //   "Error:",
  //   error
  // );

  return (
    <SymptomsContext.Provider
      value={{ drugs, loading, error, fetchDrugsBySymptoms }}>
      {children}
    </SymptomsContext.Provider>
  );
};

export default SymptomsProvider;

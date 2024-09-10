import React, { createContext, useState, useCallback, useRef } from "react";
import { getRequest, url } from "../utilis/Fetch";

export const DrugsContext = createContext();

const DrugsProvider = ({ children }) => {
  const [drugsBySearch, setDrugsBySearch] = useState([]); // State for search results
  const [drugsByCategory, setDrugsByCategory] = useState([]); // State for category-filtered drugs
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchingRef = useRef(false);

  // Function to fetch drugs by name (for search)
  const fetchDrugsByName = useCallback(async (name) => {
    if (!name || fetchingRef.current) return;

    fetchingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const drugsData = await getRequest(`${url}/search/name/${name}`);
      setDrugsBySearch(drugsData); // Update only search results state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, []);

  // Function to fetch all categories from drugs data
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const drugsData = await getRequest(`${url}`);

      // Assuming that drugsData contains an array of drugs and each drug has a 'category' property
      const allCategories = drugsData.map((drug) => drug.category);

      // Use Set to filter out unique categories
      const uniqueCategories = [...new Set(allCategories)];

      setCategories(uniqueCategories);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to fetch drugs by category
  const fetchDrugsByCategory = useCallback(async (categoryName) => {
    if (!categoryName || fetchingRef.current) return;

    fetchingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const drugsData = await getRequest(`${url}/category/${categoryName}`);
      setDrugsByCategory(drugsData); // Update only category-filtered drugs state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, []);

  return (
    <DrugsContext.Provider
      value={{
        drugsBySearch, // Search results state
        drugsByCategory, // Category-filtered drugs state
        categories,
        loading,
        error,
        fetchDrugsByName, // Search function
        fetchDrugsByCategory, // Category filter function
        fetchCategories,
      }}>
      {children}
    </DrugsContext.Provider>
  );
};

export default DrugsProvider;

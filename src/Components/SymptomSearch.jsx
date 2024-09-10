import React, { useState, useEffect, useContext } from "react";
import { SymptomsContext } from "../Context/SymptomsContext";
import DrugCard from "./DrugCard";
import { CiSearch } from "react-icons/ci";

const SymptomSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { fetchDrugsBySymptoms, drugs, loading, error } =
    useContext(SymptomsContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setHasSearched(true);
    fetchDrugsBySymptoms(query);
  };

  useEffect(() => {
    if (!loading && isSearching) {
      setIsSearching(false);
    }
  }, [loading, isSearching]);

  return (
    <div className="custom-width mt-8 flex flex-col items-center">
      <div className="w-[90%] md:w-[70%] h-[50px]">
        <form
          onSubmit={handleSearch}
          className="w-full h-full flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter symptoms (e.g., fever, headache)"
            className="w-[80%] h-full"
          />
          <button
            type="submit"
            className="bg-custom-blue text-white h-full p-4 rounded flex items-center justify-center">
            <CiSearch className="text-2xl" />
          </button>
        </form>
      </div>

      {isSearching && loading && (
        <div className="w-full mt-8">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="h-48 mx-auto border-2 rounded-md w-full">
              <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col space-y-3">
                  <div className="h-6 bg-gray-300 rounded-md w-36"></div>
                  <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-center">{error}</p>}

      {hasSearched && drugs.length > 0 ? (
        <div className="w-full mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {drugs.map((drug, index) => (
            <DrugCard key={index} name={drug.drug} />
          ))}
        </div>
      ) : (
        hasSearched &&
        !isSearching &&
        !loading && <p className="text-center">No drug found.</p>
      )}
    </div>
  );
};

export default SymptomSearch;

import React, { useState, useContext, useEffect } from "react";
import { DrugsContext } from "../Context/SearchDrugsContext";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import DrugCard from "./DrugCard";

const DrugSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { fetchDrugsByName, drugsBySearch, loading, error } =
    useContext(DrugsContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setHasSearched(true);
    fetchDrugsByName(query);
  };

  useEffect(() => {
    if (!loading && isSearching) {
      setIsSearching(false);
    }
  }, [loading, isSearching]);

  return (
    <div className="custom-width mt-8 flex flex-col items-center">
      <div className="w-[90%] md:w-[70%] h-[50px] mb-8">
        <form
          onSubmit={handleSearch}
          className="w-full h-full flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search drug by name"
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
          <div className="h-24 mx-auto border-2 rounded-md w-[80%]">
            <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="flex flex-col space-y-3">
                <div className="h-6 bg-gray-300 rounded-md w-36"></div>
                <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-center">{error}</p>}

      {hasSearched && drugsBySearch && drugsBySearch.length > 0 ? (
        <div className="w-full flex gap-4 items-center justify-center flex-wrap">
          {drugsBySearch.map((drug, index) => (
            // <DrugCard key={drug.id} name={drug.name} />
            <div key={index}>
              <p>{drug.name}</p>
              <Link to={`/drug/${drug.name}`} className="text-blue-500">
                view more
              </Link>
            </div>
          ))}
        </div>
      ) : (
        hasSearched &&
        !isSearching && <p className="text-center">No drug found.</p>
      )}
    </div>
  );
};

export default DrugSearch;

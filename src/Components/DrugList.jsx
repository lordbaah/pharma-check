import React, { useContext } from "react";
import { DrugsContext } from "../Context/SearchDrugsContext";
import DrugCard from "./DrugCard";

const DrugList = () => {
  const { drugsByCategory, loading, error } = useContext(DrugsContext);

  if (loading) {
    return (
      <div className="custom-width mt-8 grid gap-4 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-24 mx-auto border-2 rounded-md w-full">
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
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="custom-width mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {drugsByCategory.map((drug) => (
        <DrugCard
          key={drug.id}
          id={drug.id}
          name={drug.name}
          description={drug.description}
        />
      ))}
    </div>
  );
};

export default DrugList;

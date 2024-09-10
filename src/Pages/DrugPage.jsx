import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DrugsContext } from "../Context/SearchDrugsContext";

const DrugPage = () => {
  const { name } = useParams();
  const { fetchDrugsByName, drugsBySearch, loading, error } =
    useContext(DrugsContext);

  useEffect(() => {
    if (name) {
      // console.log("Fetching drug data");
      fetchDrugsByName(name);
    }
  }, [name, fetchDrugsByName]);

  const selectedDrug = drugsBySearch.length > 0 ? drugsBySearch[0] : null;

  if (loading)
    return (
      <div className="custom-width mt-20">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="h-48 mx-auto border-2 rounded-md w-full">
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

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-20 mb-8">
      <div className="custom-width flex flex-col gap-4">
        {selectedDrug ? (
          <>
            <h1 className="text-5xl">{selectedDrug.name}</h1>
            <p>{selectedDrug.description}</p>
            <div className="">
              <p className="text-2xl font-bold">Side Effects:</p>
              <ul>
                {selectedDrug.sideEffects.map((effect, index) => (
                  <li className="list-disc ml-4" key={index}>
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-bold">
              {selectedDrug.minAge < 18
                ? "Suitable for children"
                : "Not suitable for children"}
            </p>
            <p>
              The minimum age to use this drug is {selectedDrug.minAge} years
              and above.
            </p>
            <div className="">
              <p className="text-2xl font-bold">
                {selectedDrug.name} is used to treat:
              </p>
              <ul>
                {selectedDrug.treatment.map((treat, index) => (
                  <li className="list-disc ml-4" key={index}>
                    {treat}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>No drug found</p>
        )}
      </div>
    </section>
  );
};

export default DrugPage;

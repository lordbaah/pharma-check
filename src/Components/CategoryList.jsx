import React, { useContext, useEffect, useState } from "react";
import { DrugsContext } from "../Context/SearchDrugsContext";

const CategoryList = () => {
  const { categories, fetchCategories, fetchDrugsByCategory, loading, error } =
    useContext(DrugsContext);
  const [activeCategory, setActiveCategory] = useState(""); // Track the active category

  useEffect(() => {
    fetchCategories(); // Fetch categories when the component mounts
  }, [fetchCategories]);

  // Set the initial category and fetch its drugs when categories are loaded
  useEffect(() => {
    if (categories.length > 0) {
      const initialCategory = categories[0]; // First category as default
      setActiveCategory(initialCategory);
      fetchDrugsByCategory(initialCategory);
    }
  }, [categories, fetchDrugsByCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category
    fetchDrugsByCategory(category); // Fetch drugs by the selected category
  };

  if (loading)
    return (
      <div className="custom-width mt-8">
        {[...Array(1)].map((_, index) => (
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
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="custom-width mt-8">
      <ul className="flex items-center justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`p-2 cursor-pointer ${
                category === activeCategory
                  ? "bg-custom-blue text-white"
                  : "bg-[#c3d3fa]"
              }`}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

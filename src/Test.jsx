import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Test = ({ category }) => {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await fetch(`http://localhost:3000`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDrugs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching drugs by category:", error);
        setLoading(false);
      }
    };

    fetchDrugs();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading drugs...</p>
      ) : (
        <ul>
          {drugs.map((drug) => (
            <li key={drug.name}>
              {drug.name} - {drug.category}
              <Link to={`/drug/${drug.name}`} className="text-blue-500">
                View More
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;

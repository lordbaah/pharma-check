import { Link } from "react-router-dom";
const DrugCard = ({ id, name, description }) => {
  return (
    <div className="bg-[#c3d3fa] border p-4 rounded-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
      <Link to={`/drug/${name}`} className="text-blue-500">
        View More
      </Link>
    </div>
  );
};

export default DrugCard;

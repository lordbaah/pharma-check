import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const NavItems = [
  { name: "Home", url: "/", icon: <CiHome className="text-3xl" /> },
  {
    name: "Explore",
    url: "/drugs",
    icon: <MdOutlineExplore className="text-3xl" />,
  },
  {
    name: "Search",
    url: "/search",
    icon: <CiSearch className="text-3xl" />,
  },
  {
    name: "User",
    url: "/dashboard",
    icon: <CiUser className="text-3xl" />,
  },
];

const NavLinks = () => {
  return (
    <ul className="flex justify-between">
      {NavItems.map((item, index) => (
        <li key={index} className="flex items-center">
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? "text-[#f2f2f5] flex flex-col items-center"
                : "text-[#1a1f51] flex flex-col items-center"
            }>
            {item.icon}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

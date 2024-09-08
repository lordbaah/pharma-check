import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayOut;

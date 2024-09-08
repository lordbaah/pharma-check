import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-[50%] translate-x-[-50%] w-[90%] z-50 md:w-[50%]">
      <div className="custom-width bg-custom-blue p-4 rounded">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

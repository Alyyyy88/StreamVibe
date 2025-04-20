import NavItems from "./NavItems";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
const Nav = () => {
  return (
    <div className=" backdrop-blur-lg bg-gray/40 fixed w-full z-50">
      <nav className="flex  md:justify-evenly justify-between p-2 items-center  ">
        <NavLogo />
        <NavList />
        <NavItems />
      </nav>
    </div>
  );
};

export default Nav;

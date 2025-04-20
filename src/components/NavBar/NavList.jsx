import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const NavList = () => {
  const [select, setSelect] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies & Shows", path: "/movies" },
    { name: "Support", path: "/support" },
    { name: "Subscription", path: "/subscription" },
  ];

  return (
    <>
      <ul className="hidden md:flex md:gap-8 bg-[#0F0F0F]  md:p-2 md:rounded-md md:text-lg md:cursor-pointer">
        {navItems.map((item) => (
          <Link to={item.path}
            key={item.name}
            onClick={() => setSelect(item.name)}
            className={`px-4 rounded-md py-2 transition-all duration-200 ${
              select === item
                ? "bg-[#1A1A1A] text-white"
                : "hover:bg-gray-800 text-[#BFBFBF]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-4">
          {isOpen ? (
            <X color="#BFBFBF" size={24} />
          ) : (
            <Menu color="#BFBFBF" size={24} />
          )}
        </button>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 p-4  rounded-md">
            {navItems.map((item) => (
            <Link to={item.path}
            key={item.name}
            onClick={() => setSelect(item)}
            className={`px-4 rounded-md py-2 transition-all duration-200 ${
              select === item
                ? "bg-[#1A1A1A] text-white"
                : "hover:bg-gray-800 text-[#BFBFBF]"
            }`}
          >
            {item.name}
          </Link>
        ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavList;

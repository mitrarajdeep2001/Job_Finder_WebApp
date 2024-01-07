import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="relative bg-[#f7fdfd] z-50">
      <nav className="container mx-auto flex items-center justify-between p-5">
        {/* Nav logo starts */}
        <div>
          <Link to="/" className="text-blue-600 font-bold text-xl">
            Job<span className="text-[#1677cccb]">Finder</span>
          </Link>
        </div>
        {/* Nav logo ends */}
        {/* Nav routes starts */}
        <ul className="hidden lg:flex gap-10 text-base">
          <li>
            <Link to="/">Find Job</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/upload-job">Upload Job</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
        </ul>
        {/* Nav routes ends */}
        {/* Auth button starts */}
        <div className="hidden lg:block">
          <Link to="/user-auth">
            <CustomButton
              title="Sign In"
              containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"
            />
          </Link>
        </div>
        {/* Auth button ends */}
        <button
          className="block lg:hidden text-slate-900"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>
        {/* Mobile menu starts */}
        <div
          className={`${
            isOpen ? "absolute flex bg-[#f7fdfd]" : "hidden"
          } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          <Link to="/" onClick={handleCloseNavbar}>
            Find Job
          </Link>
          <Link to="/companies" onClick={handleCloseNavbar}>
            Companies
          </Link>
          <Link to="/upload-job">Upload Job</Link>
          <Link to="/about-us" onClick={handleCloseNavbar}>
            About
          </Link>

        {/* Auth button starts */}
          <Link to="/user-auth">
            <CustomButton
              title="Sign In"
              containerStyles="text-blue-600 py-1.5 px-5 my-10 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"
            />
          </Link>
        {/* Auth button ends */}
        </div>
        {/* Mobile menu ends */}
    </header>
  );
};

export default Navbar;

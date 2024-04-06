import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthModal,
  setLogout,
  setTheme,
} from "../Redux-Toolkit/Slices/auth";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user);
  return (
    <header className="relative bg-[#f7fdfd] dark:bg-slate-900 z-30">
      {/* Desktop menu starts */}
      <nav className="container mx-auto flex items-center justify-between py-5 px-5">
        {/* Nav logo starts */}
        <div>
          <div className="hover:scale-110 transition-none ">
            <NavLink to="/">
              <div className="text-blue-600 font-bold text-xl leading-[0.7]">
                Jobs<span className="text-[#1677cccb]">24x7</span>
              </div>
              <div className="text-red-800 text-[0.5rem]">
                Get your dream job today
              </div>
            </NavLink>
          </div>
        </div>
        {/* Nav logo ends */}
        {/* Nav routes starts */}
        <ul className="hidden lg:flex gap-10 text-base">
          <li className="dark:text-white">
            <NavLink to="/">Find Job</NavLink>
          </li>
          <li className="dark:text-white">
            <NavLink to="/companies">Companies</NavLink>
          </li>
          {user && user.userType === "company" && (
            <>
              <li className="dark:text-white">
                <NavLink to="/upload-job">Upload Job</NavLink>
              </li>
              <li className="dark:text-white">
                <NavLink to="/my-posts">My Posts</NavLink>
              </li>
            </>
          )}
          <li className="dark:text-white">
            <NavLink to="/about-us">About</NavLink>
          </li>
        </ul>
        {/* Nav routes ends */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Theme button starts */}
          {mode === "dark" ? (
            <MdOutlineLightMode
              fontSize={"1.5rem"}
              color="white"
              cursor={"pointer"}
              onClick={() => dispatch(setTheme(!mode))}
            />
          ) : (
            <MdDarkMode
              fontSize={"1.5rem"}
              cursor={"pointer"}
              onClick={() => dispatch(setTheme(!mode))}
            />
          )}
          {/* Theme button ends */}
          {/* Auth button starts */}
          {user ? (
            <div className="flex gap-5">
              <span className="font-medium text-white bg-blue-600 px-3 rounded-full cursor-default">
                {user.userType === "jobseeker"
                  ? user.firstName + " " + user.lastName
                  : user.companyName}
              </span>
              <BiLogOut
                className={"text-black dark:text-white"}
                fontSize={"1.5rem"}
                cursor={"pointer"}
                onClick={() => {
                  dispatch(setLogout());
                  sessionStorage.removeItem("jwt");
                }}
              />
            </div>
          ) : (
            <CustomButton
              title="Sign In"
              containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"
              onClick={() => dispatch(setAuthModal(true))}
            />
          )}
          {/* Auth button ends */}
        </div>
        {/* Mobile menu button starts */}
        <button
          className="block lg:hidden text-slate-900 dark:text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
        {/* Mobile menu button ends */}
      </nav>
      {/* Desktop menu ends */}
      {/* Mobile menu starts */}
      <nav
        className={`${
          isOpen ? "absolute flex bg-[#f7fdfd] dark:bg-slate-900" : "hidden"
        } container mx-auto lg:hidden flex-col items-center gap-3 py-5`}
      >
        <NavLink
          to="/"
          className={"dark:text-white"}
          onClick={handleCloseNavbar}
        >
          Find Job
        </NavLink>
        <NavLink
          to="/companies"
          className={"dark:text-white"}
          onClick={handleCloseNavbar}
        >
          Companies
        </NavLink>
        {user && user.userType === "company" && (
          <>
            <NavLink to="/upload-job" className={"dark:text-white"}>
              Upload Job
            </NavLink>
            <NavLink to="/my-posts" className={"dark:text-white"}>
              My Posts
            </NavLink>
          </>
        )}
        <NavLink
          to="/about-us"
          className={"dark:text-white"}
          onClick={handleCloseNavbar}
        >
          About
        </NavLink>
        <div className="flex flex-row-reverse items-center gap-10">
          {/* Theme button starts */}
          {mode === "dark" ? (
            <MdOutlineLightMode
              fontSize={"1.5rem"}
              color="white"
              cursor={"pointer"}
              onClick={() => dispatch(setTheme(!mode))}
            />
          ) : (
            <MdDarkMode
              fontSize={"1.5rem"}
              cursor={"pointer"}
              onClick={() => dispatch(setTheme(!mode))}
            />
          )}
          {/* Theme button ends */}
          {/* Auth button starts */}
          {user ? (
            <div className="flex gap-5">
              <span className="font-medium text-white bg-blue-600 px-3 rounded-full cursor-default">
                {user.userType === "jobseeker"
                  ? user.firstName + " " + user.lastName
                  : user.companyName}
              </span>
              <BiLogOut
                className={"text-black dark:text-white"}
                fontSize={"1.5rem"}
                cursor={"pointer"}
                onClick={() => {
                  dispatch(setLogout());
                  sessionStorage.removeItem("jwt");
                }}
              />
            </div>
          ) : (
            <CustomButton
              title="Sign In"
              containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"
              onClick={() => dispatch(setAuthModal(true))}
            />
          )}
          {/* Auth button ends */}
        </div>
      </nav>
      {/* Mobile menu ends */}
    </header>
  );
};

export default Navbar;

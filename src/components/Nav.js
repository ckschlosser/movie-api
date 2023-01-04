import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const navItems = [
    { link: "Popular", href: "#" },
    { link: "Action", href: "#" },
    { link: "Horror", href: "#" },
    { link: "Comedy", href: "#" },
    { link: "Kids", href: "#" },
  ];

  return (
    <>
      <nav className="w-full h-16 bg-secondaryBlue flex justify-around items-center">
        <div className="hidden md:flex md:">
          <ul className="flex">
            <li className="text-secondaryTan mr-4">
              <a
                href="#"
                className="text-md px-2 py-1 hover:bg-primaryBlue hover:rounded-2xl hover:duration-300 "
              >
                Popular
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </div>
        <form>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="outline-0 border-1 border-secondaryBlue border-solid rounded-tl-3xl rounded-bl-3xl py-1 px-3 text-secondaryTan bg-primaryBlue shadow-inner shadow-secondaryBlue"
            />
            <button className="outline-0 border-1 border-secondaryBlue border-solid rounded-tr-3xl rounded-br-3xl py-1 px-2 text-secondaryTan bg-secondaryBlue shadow-inner shadow-primaryBlue">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            </button>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Nav;

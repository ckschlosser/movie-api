import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  getData,
  arr,
  setShowSideBar,
  setSearch,
  close,
  menuMask,
  sideBar,
  search,
  searchMovie,
}) => {
  return (
    <nav className="w-full h-16 bg-secondaryBlue flex justify-around items-center">
      <div className="hidden md:flex md:">
        <ul className="flex">
          {arr.map((value) => {
            return (
              <li className="text-secondaryTan mr-4 text-md px-2 py-1 hover:bg-primaryBlue hover:rounded-2xl hover:duration-300">
                <a
                  href="#"
                  name={value}
                  onClick={(e) => {
                    getData(e.target.name);
                  }}
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:hidden cursor-pointer">
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl"
          onClick={() => setShowSideBar(true)}
        />
      </div>
      <form>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="outline-0 border-1 border-secondaryBlue border-solid rounded-tl-3xl rounded-bl-3xl py-1 px-3 text-secondaryTan bg-primaryBlue shadow-inner shadow-secondaryBlue"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyDown={searchMovie}
          />
          <button className="outline-0 border-1 border-secondaryBlue border-solid rounded-tr-3xl rounded-br-3xl py-1 px-2 text-secondaryTan bg-secondaryBlue shadow-inner shadow-primaryBlue">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
      {close}
      {menuMask}
      {sideBar}
    </nav>
  );
};

export default Nav;

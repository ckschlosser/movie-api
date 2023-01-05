import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  let sideBar;
  let menuMask;
  let close;

  if (showSideBar) {
    sideBar = <SideBar />;
    menuMask = (
      <div
        className="bg-primaryTan/30 fixed top-0 left-0 w-full h-full z-40"
        onClick={() => setShowSideBar(false)}
      ></div>
    );
    close = (
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute top-3 left-3 text-2xl z-[60] cursor-pointer"
        onClick={() => setShowSideBar(false)}
      />
    );
  }

  showSideBar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <nav className="w-full h-16 bg-secondaryBlue flex justify-around items-center">
        <NavLinks />
        <div className="md:hidden cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl"
            onClick={() => setShowSideBar(true)}
          />
        </div>
        <SearchBar />
        {close}
        {menuMask}
        {sideBar}
      </nav>
    </>
  );
};

export default Nav;

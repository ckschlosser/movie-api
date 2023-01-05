import React, { useState } from "react";
const SideBar = () => {
  const navLinks = [
    { name: "Popular", href: "#" },
    { name: "Action", href: "#" },
    { name: "Horror", href: "#" },
    { name: "Comedy", href: "#" },
    { name: "Kids", href: "#" },
  ];

  const links = navLinks.map((link, index) => (
    <li
      key={index}
      className="text-2xl border-t-2 border-primaryBlue w-full text-center py-3 cursor-pointer hover:bg-secondaryTan hover:shadow-innerXL hover:shadow-primaryBlue hover:duration-700"
    >
      {link.name}
    </li>
  ));

  return (
    <ul className="flex flex-col mt-16 justify-center items-center border-b-2 border-primaryBlue">
      {links}
    </ul>
  );
};

export default SideBar;

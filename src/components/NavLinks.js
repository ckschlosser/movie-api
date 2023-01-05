import React from "react";

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;

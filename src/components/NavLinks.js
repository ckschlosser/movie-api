import React from "react";

const NavLinks = () => {
  let arr = ["Popular", "Theatre", "Drama", "Comedy", "Kids"];
  return (
    <>
      {arr.map((value) => {
        return (
          <li className="text-secondaryTan mr-4 text-md px-2 py-1 hover:bg-primaryBlue hover:rounded-2xl hover:duration-300">
            <a href="#" name={value}>
              {value}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;

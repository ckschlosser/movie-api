import React from "react";

const SideBar = () => {
  let arr = ["Popular", "Theatre", "Drama", "Comedy", "Kids"];

  return (
    <ul className="mt-16 border-b-2 border-primaryBlue">
      {arr.map((value) => {
        return (
          <li className="text-2xl border-t-2 border-primaryBlue w-full text-center py-3 cursor-pointer hover:bg-secondaryTan hover:shadow-innerXL hover:shadow-primaryBlue hover:duration-700">
            <a href="#" name={value}>
              {value}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;

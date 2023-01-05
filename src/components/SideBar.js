import React from "react";
const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-primaryTan z-50 shadow-inner shadow-primaryBlue">
      <ul className="flex mt-16 justify-center items-center">
        <li className="text-2xl border-t-2 border-primaryBlue w-full text-center py-3 cursor-pointer hover:bg-secondaryTan hover:shadow-innerXL hover:shadow-primaryBlue hover:duration-700">
          Popular
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

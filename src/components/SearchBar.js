import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;

import React from "react";
import { FiSearch } from "react-icons/fi";
import "./search.css"

function Search() {
  return (
    <div className="search w-full h-[50px] bg-[#e5e5e5] rounded-[10px] relative flex items-center">
      <input
        type="text"
        id="search-input"
        name="search"
        placeholder="Search for products..."
        autoComplete="on"
        className="w-full h-full focus:outline-none bg-transparent pl-5 pr-10 text-[15px] rounded-[10px]"
      />

      <FiSearch className="absolute right-4 text-gray-600 text-[18px] cursor-pointer" />
    </div>
  );
}

export default Search;

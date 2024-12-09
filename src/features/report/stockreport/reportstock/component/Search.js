import React, { useState } from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => setSearchTerm(e.target.value);

    return(
        <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered w-full pl-10 h-10"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute top-2.5 left-3" />
      </div>
    );
}

export default Search;
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Search({ searchValue, updateSearchValue, updateQuery }) {

  return (
    <header>
      <form onSubmit={updateQuery}>
        <input type="text" value={searchValue} onChange={updateSearchValue} />
        <button>
          Search <FaSearch />
        </button>
      </form>
    </header>
  );
}

export default Search;

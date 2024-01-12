import React from "react";
import "./SearchBar.css";
import { TodoContext } from "../TodoContext";

function SearchBar({ placeholder = "Default" }) {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      className="search"
      value={searchValue}
      placeholder={placeholder}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  );
}

export { SearchBar };

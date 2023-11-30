import React, { useState } from "react";

function Search({ currentSearch, onSearchTerm }) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={currentSearch}
        placeholder="Type a name to search..."
        onChange={(e) =>onSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;

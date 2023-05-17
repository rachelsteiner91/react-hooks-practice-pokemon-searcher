import React from "react";

function Search({setSearch, search}) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        value={search}
        className="prompt" 
        onChange={(e)  => handleChange(e)} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

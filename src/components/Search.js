import React from "react";

function Search({search, setSearch}) {

  function handleChange(e){
    setSearch(e.target.value)
  }
 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt"
        value={search}
        type="text"
        onChange={(e)=>handleChange(e)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

import React from "react";

function Search({search, setSearch}) {

  function handleChange(e){
    setSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} type="text" className="prompt" onChange={(e) =>handleChange(e)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

//Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
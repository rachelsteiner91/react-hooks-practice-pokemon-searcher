import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

useEffect(()  => {
  fetch('http://localhost:3001/pokemon')
  .then(response => response.json())
  .then(data  => setPokemon(data))
}, [])

const filteredPokemon  = [...pokemon].filter((el) =>  {
  return el.name.toLowerCase().includes(search.toLowerCase())
})

function addPokemon(newPokemon) {
  setPokemon([...pokemon, newPokemon])
}
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search  setSearch={setSearch}  search={search} />
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;

// Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
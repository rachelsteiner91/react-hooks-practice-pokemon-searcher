import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonCards, setPokemonCards] = useState([])
  const [search, setSearch] = useState("")

useEffect(() => {
  fetch ('http://localhost:3001/pokemon')
  .then((response) => response.json())
  .then((data) => setPokemonCards(data))
},[])

//FILTER search a Pokemon by its name in order to narrow down the cards shown on the page
const filteredPokemonCards = [...pokemonCards].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonCards={filteredPokemonCards}/>
    </Container>
  );
}

export default PokemonPage;

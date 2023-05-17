import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      
      {
        pokemon.map((el) => {
        return <PokemonCard key={el.id} onePokemon={el} />
    }) }
    </Card.Group>
  );
}

export default PokemonCollection;

//Render each Pokemon name, sprite, and hp in a card
//create a .map to return all pokemoncards
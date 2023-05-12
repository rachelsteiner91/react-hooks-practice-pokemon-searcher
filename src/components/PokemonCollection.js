import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCards}) {
  return (
  
    <Card.Group itemsPerRow={6}>
     
     
        {pokemonCards.map((el) => {
     return <PokemonCard key={el.id} pokemon={el}  />

         } )}
    
    </Card.Group>
    
  );
}

export default PokemonCollection;

//#1Create an index displaying Pokemon 'cards'

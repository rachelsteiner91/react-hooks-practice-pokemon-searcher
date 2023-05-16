import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  //When clicked, the CARD should toggle between displaying the front and back sprites. so add the onclick to the <Card> element
  const [isClicked, setIsClicked] = useState(true)

  function handleClick(e) {
    setIsClicked(!isClicked)
  }

  return (
    <Card  onClick={(e) => handleClick(e)}>
      <div>
        <div className="image">
          <img 
          value={pokemon.id} 
          src={isClicked? pokemon.sprites.front : pokemon.sprites.back} 
          alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;


//Render each Pokemon name, sprite, and hp in a card
//When clicked, the card should toggle between displaying the front and back sprites
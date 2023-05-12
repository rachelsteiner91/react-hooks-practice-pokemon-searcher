import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [isClicked, setIsClicked] = useState(true)

  function handleCardToggleClick(e) {
    setIsClicked(!isClicked)
  }
  //console.log(handleCardToggleClick)
  return (
    <Card onClick={(e) => handleCardToggleClick(e)}> 
      <div>
        <div className="image" > 
          <img  
          value={pokemon.id}
          alt="oh no!"
          src={isClicked? pokemon.sprites.front : pokemon.sprites.back}  
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

//#1
//Render each Pokemon name, sprite, and hp in a card
//When clicked the card should toggle between displaying the front and back sprites
// this means:
//i need to make a usestate for the click, then i need to invoke it where the card details are. then a ternary needs to be created like ////onClick={(e) => handleCardToggleClick(e)} where the<Card /> component is then whatever is getting affected, so in this case the imaage is meant to change - so id put the following where the <img src> is: 
//{isClicked? pokemon.sprites.front : pokemon.sprites.back}"
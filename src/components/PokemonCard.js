import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({onePokemon}) {
  const [isClicked, setIsClicked] = useState(true)

  function handleToggleClick(e)  {
    setIsClicked(!isClicked)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={(e) => handleToggleClick(e)}>
          {isClicked?
          (<img 
          src={onePokemon.sprites.front}
          alt="oh no!"
           /> ) :
           (<img 
          src={onePokemon.sprites.back}
          alt="oh no!"
           /> )
          }
        </div>
        <div className="content">
          <div className="header">{onePokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {onePokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;


//Render each Pokemon name, sprite, and hp in a card
//When clicked, the card should toggle between displaying the front and back sprites

// "pokemon": [
  // {
  //   "id": 2,
  //   "name": "ivysaur",
  //   "hp": 60,
  //   "sprites": {
  //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
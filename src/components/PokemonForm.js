import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const initialForm ={
    name: '',
    hp: '',
    sprites: {frontUrl:  '',
    backUrl: ''},
  }
  const [form, setForm] =useState(initialForm)
  function handleChangeForm(e){
    setForm({...form,
    [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', 
    {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        hp: form.hp,
        sprites: {front: form.frontUrl,  back: form.backUrl}
      }),
      headers:{'content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(newPokemon  => {
      addPokemon(newPokemon)
    })
  }
    

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
          value={form.name}
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          onChange={(e) =>handleChangeForm(e)}
          />
          <Form.Input 
          value={form.hp}
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          onChange={(e) =>handleChangeForm(e)}
          />
          <Form.Input
            value={form.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) =>handleChangeForm(e)}
          />
          <Form.Input
            value={form.backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) =>handleChangeForm(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

//Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh
//"pokemon": [
  // {
  //   "id": 2,
  //   "name": "ivysaur",
  //   "hp": 60,
  //   "sprites": {
  //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  //   }
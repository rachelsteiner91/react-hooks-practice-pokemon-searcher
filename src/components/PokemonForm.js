import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  const initialForm ={
    name: "",
    hp: "",
    frontUrl: "",
    backUrl:""
  }
  const [form, setForm] = useState(initialForm)
//wire up the form // controlled form
  function handleChange(e){
    setForm({...form,
      [e.target.name]: e.target.value

    }
    )
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/pokemon',{
    method:'POST',
    body: JSON.stringify({
      name: form.name,
      hp: form.hp,
      sprites: {front: form.frontUrl, back: form.backUrl}
    }),
    headers:{
      'content-type' : 'application/json'
    }
    })
    .then(response => response.json())
    .then(addNewPokemon => {
        handleNewPokemon(addNewPokemon)
    }
      )
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
          fluid 
          label="Name" 
          placeholder="Name" 
          name="name" 
          onChange={handleChange}
          
          />
          <Form.Input 
          value={form.hp}
          fluid 
          label="hp" 
          placeholder="hp" 
          name="hp"
          onChange={handleChange} />
          <Form.Input
            value={form.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            value={form.backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;


//#4
//Wire up the form 
//to add a missing Pokemon 
//add value for each part of the form basaed on the initialform state so value ={form.name} value={form.hp} value={form.frontUrl} value={form.backUrl}
//(Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. 
//When a new Pokemon is added, it should show on the page without having to refresh.
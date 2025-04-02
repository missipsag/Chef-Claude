import React, { Fragment } from 'react'
import './styles/Form.css'

export default function Form({  ingredients, setIngredients }) {
  
 

  function addIngredient(formData) {

    const newIngredient = formData.get("ingredient");
    newIngredient && setIngredients([...ingredients, newIngredient]);

 
    }

  return (
      <form  className='form-part' action={addIngredient}>
        <input type="text" name="ingredient" id="form" className='' placeholder=".e.g potatoes" aria-label='ingredient' autoFocus/>
        <input type="submit" name="" id="" value="+ Add ingredient"  /> 
      </form>   
      )
    
}

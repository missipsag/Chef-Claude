import React from 'react'
import './styles/Form.css'
import Body from './Body'
import { useState } from 'react';

export default function Form() {

  const [ingredients, setIngredients] = useState([]);
  
  const ingredientsListItems = ingredients.map(ing => (
    <li key={ing}> { ing } </li>
  ))

  function addIngredient(event) {

    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    newIngredient && setIngredients([...ingredients, newIngredient]);
    ingredientsListItems()
   
  }
  return (
    <>
      <form action="" className='form-part' onSubmit={addIngredient}>
        <input type="text" name="ingredient" id="form" className='' placeholder=".e.g potatoes" aria-label='ingredient'/>
        <input type="submit" name="" id="" value="+ Add ingredient"  /> 
      </form>   
      
      <ul>
        {ingredientsListItems}
      </ul>
    </>
  )
    
}

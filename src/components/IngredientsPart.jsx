import React from 'react'

export default function IngredientsPart({ingredients}) {

     const ingredientsListItems = ingredients.map(ing => (
    <li key={ing}> { ing } </li>
  ))
  return (
      <section className='ingredients-part'>
        {ingredients.length > 0
          ? <>
              <h2 className='ingredients-text'>Ingredients on hand :</h2>
              <ul className='ingredients-list'> {ingredientsListItems} </ul>
            </>
          : <h2> Oupss... Looks like you didn't give me ingredients yet. </h2> }
         
        </section>
  )
}

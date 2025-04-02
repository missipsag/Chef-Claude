import React from 'react'

export default function BottomPart({ getRecipe }) {
  
  return (
      <>
        <section className='buttom-section'>
            <h3> Ready for a recipe ?</h3>
            <div>
              <span> generate a recipe from your list of ingredients</span>
              <button onClick={getRecipe}> Get recipe </button>
            </div>
          </section>
      </>
  )
}

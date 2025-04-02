
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ToggleSuggestions from './components/ToggleSuggestions'
import { useState } from 'react'
import IngredientsPart from './components/IngredientsPart'
import BottomPart from './components/BottomPart';
import { getRecipeFromChefClaude } from '../ai';


function App() {
  const [ingredients, setIngredients] = useState(["potatoes", "steak", "salad", "cheez"]);
  const [recipe, setRecipe] = useState("")
  async function getRecipe() {
    const markdownRecipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(markdownRecipe)    
  }
  
  return (
    <>   
      <Header />
      <Form ingredients={ingredients} setIngredients={setIngredients} />
      <IngredientsPart ingredients={ingredients} />
      {ingredients.length >= 4 && <BottomPart setIsShown={setRecipe} getRecipe={getRecipe}/> }   
      { recipe.length > 0 && <ToggleSuggestions  recipe ={recipe} />}
    </>
  )
}
export default App

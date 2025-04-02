import Markdown from 'react-markdown'
import './styles/RecipeComponent.css'

export default function ToggleSuggestions({recipe}) {
    console.log("Recipe is : ", recipe)
    
    return (
        <section className="recipe-component" aria-live='polite'>
            <h3 className="recipe-header">Chef Claude recommands : </h3>
                <Markdown >
                    {recipe}
                </Markdown>
            </section>
                 )
}

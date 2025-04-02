import  { HfInference } from "@huggingface/inference";

import OpenAI from "openai";



const PROMPT = `
    you are an assistant that receives a list of ingredients that a user has and suggest a
    recipe that they could make with some or all those ingredients. You don't need to use all the ingredients.
    You can add a few ingredients like spices, salt, water (ingredients that are usually available in every kichen).
    Format your response to markdown to make it easier to render on a webpage.
`


const openai = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: import.meta.env.VITE_DPSK_V3_FREE,
        dangerouslyAllowBrowser: true
        
});

export async function getRecipeFromChefClaude(ingredients) {
    const ingredientsString = ingredients.join(",");
    try {
        const res = await openai.chat.completions.create({
            model: "deepseek/deepseek-chat:free",
            messages: [
                { role: "system", content: PROMPT },
                { role: "user", content: `I have ${ingredientsString} list. Please recommand me a recipe I can make.` }
            ],
        });
        
        console.log("inside getRecipeFromChefClaude")
        console.log("The response from AI is ", res)
        const recipe = res ? res.choices[0].message.content :  "no response received"
       
        return recipe;
    } catch (error) {
        console.error(error);
    }
}

    
        


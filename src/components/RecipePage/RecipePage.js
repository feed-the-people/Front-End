import './RecipePage.css';
import {allRecipes} from '../../mockData.js'

function RecipePage() {
  let recipe1 = allRecipes[0]
  console.log(recipe1)
  // let recipeIngredients = recipe1.ingredients.map(ingredient => <p>{ingredient}</p>)


  return (
    <div className="RecipePage">
      <header className="RecipePage-header">
        <h1> Recipe Page </h1>
      </header>
      <section className="recipe-section">
        <h3>{recipe1.title}</h3>
        <p><img src={recipe1.image} /></p>
        <p>{recipe1.description}</p>
        <p>{recipe1.instructions}</p>
        {/* {recipeIngredients} */}
      </section>

    </div>
  );
}

export default RecipePage;

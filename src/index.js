
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Menu from './App';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {
      name: "Baked Salmon",
      ingredients: [
        {name: "Salmon", amount: 1, measurement: "1 lb"},
        {name: "Pine nuts", amount: 1, measurement: "cup"},
        {name: "Butter Lettuce" , amount: 2 , measurement: "cups" },
        {name: "Yellow squash", amount: 1, measurement: "med"},
        {name: "Olive oil", amount: 0.5 , measurement: "cup"},
        {name: "Garlic", amount: 3, measurement: "cloves"}
      ],
      steps: [
        "Preheat oven to 350 degrees",
        "Spread olive oil around a glass baking disk",
        "Add salmon, garlic, and pine nuts to the dish",
        "Bake for 15 minutes",
        "Add yellow squash and put back in oven for 30 minutes",
        "Remove from oven and let cool for 15 minutes. Add lettuce and serve."
      ]
    },
    {
      name: "Fish Tacos",
      ingredients: [
        {name: "Whitefish", amount: 1, measurement: "1 lb"},
        {name: "Cheese", amount: 1, measurement: "cup"},
        {name: "Iceberg lettuce", amount: 2, measurement: "cups"},
        {name: "Tomatoes", amount: 2, measurement: "large"},
        {name: "Tortillas", amount: 3, measurement: "medium"}
      ],
      steps: [
        "Cook fish on grill until hot.",
        "Place fish on 3 tortillas.",
        "Top with lettuce, cheese, and tomatoes"
      ]
    }
  ]
  
  const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
      </ul>
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => <p key={i}>{step}</p>)}
      </section>
    </section>
  
  const Menu = ({ title, recipes }) =>
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
      </div>
    </article>

ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />, 
    document.getElementById('root')
);

registerServiceWorker();


import React from 'react';

const IngredientList = ({ ingredients }) => {
    return (
        <div>
            <h4>Ingredients</h4>
            <ul>
                {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
            </ul>
        </div>
    );
}

export default IngredientList;

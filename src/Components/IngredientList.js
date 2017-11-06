
import React from 'react';

const IngredientList = ({ ingredients }) => {
    return (
        <ul>
            {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
        </ul>
    );
}

export default IngredientList;

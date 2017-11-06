
import React from 'react';
import Recipes from './Recipes';

const Menu = ({ title, recipes }) =>
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <Recipes recipes={recipes} />
    </article>;

export default Menu;
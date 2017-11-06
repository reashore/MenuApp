
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import recipes from './Data/recipes.js';
import Menu from './Components/Menu'
import registerServiceWorker from './registerServiceWorker';

let destination = document.getElementById('root');

ReactDOM.render(<Menu title="Delicious Recipes" recipes={recipes} />, destination);

registerServiceWorker();

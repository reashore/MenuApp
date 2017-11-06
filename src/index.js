
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import recipes from './Data/recipes';
import Menu from './Components/Menu'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Menu title="Delicious Recipes" recipes={recipes}/>,
    document.getElementById('root')
);

registerServiceWorker();

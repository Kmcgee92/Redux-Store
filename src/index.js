import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { addFruit, addFruits, sellFruit, sellOut } from './actions/fruitActions'
import { hireFarmer, payFarmer } from './actions/farmersActions'

window.store = store;
window.addFruit = addFruit;
window.addFruits = addFruits;
window.sellFruits = sellFruit;
window.sellOut = sellOut;
window.hireFarmer = hireFarmer
window.payFarmer = payFarmer



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

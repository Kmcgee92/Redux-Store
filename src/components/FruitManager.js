import React from 'react';
import FruitList from './FruitList';
import FruitSeller from './FruitSeller';
import FruitQuickAdd from './FruitQuickAdd';
import FruitBulkAdd from './FruitBulkAdd';

const FruitManager = (props) => {
  const { fruit, distinctFruit, add, addFruits, sell, sellOut } = props
    return (
      <div>
        <h2>Available Fruit</h2>
        <FruitList fruit={fruit}/>
        <h2>Fruit Inventory Manager</h2>
        <FruitSeller distinctFruit={distinctFruit} sell={sell} sellOut={sellOut}/>
        <FruitQuickAdd add={add}/>
        <FruitBulkAdd {...props} addFruits={addFruits}/>
      </div>
    );
  }


export default FruitManager;

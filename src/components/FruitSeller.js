import React from 'react';


const FruitSeller = ({distinctFruit, sell, sellOut}) => {

  
  const sellFruitClick = (event) => {
    const fruit = event.target.innerText;
    sell(fruit)
  }

  const sellOutClick = () => {
    sellOut()
  }

    return (
      <div>
        <h3>Sell</h3>
        {distinctFruit.map((fruitName, index) => (
          <button key={index} onClick={sellFruitClick}>{fruitName}</button>
        ))}
        <button onClick={sellOutClick}>SELL OUT</button>
      </div>
    );
  }


export default FruitSeller;

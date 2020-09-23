import React from 'react';
import FruitManagerContainer from './components/FruitManagerContainer.jsx';
import FarmerManagerContainer from './components/FarmerManagerContainer.jsx'

function App() {
  return (
    <>
      <h1>Fruit Stand</h1>
      <FruitManagerContainer />
      <FarmerManagerContainer />
    </>
  );
}

export default App;

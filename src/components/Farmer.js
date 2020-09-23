import React from 'react'

const Farmer = ({pay, farmer, fire}) => {
    const handleClick = () => pay(farmer.id);
    const fireClick = () => fire(farmer.id);

    return (
        <li>
            {farmer.name}
            {farmer.paid === false && <button onClick={handleClick}>Pay</button>}
            <button onClick={fireClick}>FIRE</button>
        </li>
    )
}
export default Farmer;
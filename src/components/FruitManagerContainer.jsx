import React, { Component } from 'react';
import FruitManager from './FruitManager'
import store from '../store'
import { addFruit, addFruits, sellFruit, sellOut } from '../actions/fruitActions';

class FruitManagerContainer extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe()
        }
    }

    add = (fruit) => {
        store.dispatch(addFruit(fruit))
        // store.dispatch({type: 'ADD_FRUIT', fruit});
    }
    addFruits = (fruit) => {
        store.dispatch(addFruits(fruit))
        // store.dispatch({type: 'ADD_FRUIT', fruit});
    }
    sell = (fruit) => {
        store.dispatch(sellFruit(fruit))
        // store.dispatch({type: 'ADD_FRUIT', fruit});
    }
    sellOut = () => {
        store.dispatch(sellOut())
        // store.dispatch({type: 'ADD_FRUIT', fruit});
    }
    render() {
        const {fruit} = store.getState()
        const distinctFruit = Array.from(new Set(fruit)).sort()
        return (
            <div>
                <FruitManager 
                fruit={fruit}
                distinctFruit={distinctFruit} 
                add={this.add}
                addFruits={this.addFruits}
                sell={this.sell}
                sellOut={this.sellOut}
                />
            </div>
        );
    }
}

export default FruitManagerContainer;
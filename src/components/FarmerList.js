import React, { Component } from 'react';
import Farmer from './Farmer'
import store from '../store'
import { payFarmer, fireFarmer } from '../actions/farmersActions'

class FarmerList extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }

    }
    pay = (id) => {
        store.dispatch(payFarmer(id))
    }

    fire = (id) => {
        store.dispatch(fireFarmer(id))
    }

    render() {
        const {farmers} = store.getState()
        const farmersList = Object.values(farmers)
        return (
            <div>
                <h2>Farmers</h2>
        {farmersList.length > 0 ? <ul>{farmersList.map(farmer => <Farmer 
        key={farmer.id} 
        farmer={farmer} 
        pay={this.pay}
        fire={this.fire}
        />)}
        </ul> : <span>No farmers currently available!</span>
        }
            </div>
        );
    }
}

export default FarmerList;
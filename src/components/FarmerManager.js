import React, { Component } from 'react';
import FarmerList from './FarmerList'
import FarmerHire from './FarmerHire'

class FarmerManager extends Component {
    render() {
        return (
            <div>
                <h2>Farmer Manager</h2>
                <FarmerList />
                <FarmerHire />
            </div>
        );
    }
}

export default FarmerManager;
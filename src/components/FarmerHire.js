import React, { Component } from 'react';
import store from '../store'
import { hireFarmer } from '../actions/farmersActions'

class FarmerHire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            farmerName: '',
        }
    }
    handleInputChange = (e) => {
        this.setState({ farmerName: e.target.value })
    }

    hireFarmerClick = () => {
        const { farmerName } = this.state
        if(farmerName) {
            store.dispatch(hireFarmer(farmerName))
            this.setState({farmerName: ''})
        }
    }
    render() {
        return (
            <div>
                <h3>Hire Farmer</h3>
                <input
                type="text"
                placeholder='Name my Farmer'
                value={this.state.farmerName}
                onChange={this.handleInputChange}
                style={{width: 300}}
                />
                <button onClick={this.hireFarmerClick}>Hire Farmer</button>
                
            </div>
        );
    }
}

export default FarmerHire;
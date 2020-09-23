
import { HIRE_FARMER, PAY_FARMER, FIRE_FARMER } from '../actions/farmersActions'

const farmerReducer = (state= {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case HIRE_FARMER:
            return {
                id: action.id,
                name: action.name,
                paid: false
            }
        case PAY_FARMER:
            return Object.assign({}, state, { paid: true });
        default:
            return state;
    }
}


const farmersReducer = (state= {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch(action.type) {
        case HIRE_FARMER: 
            nextState[action.id] = farmerReducer(undefined, action);
            return nextState;
        case PAY_FARMER: 
            nextState[action.id] = farmerReducer(nextState[action.id], action);
            return nextState;
        case FIRE_FARMER:
            debugger;
            delete nextState[action.id]
            return nextState;
        default: 
            return state;
    }
}

export default farmersReducer
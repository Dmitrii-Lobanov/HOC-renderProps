import { 
        GET_PASSENGERS,
        GET_CURRENT_USER
} from "../actions/actionTypes";
import passengers from '../../data/passengers.json';

// const INITIAL_STATE = {
//     passengers: passengers,
//     currentUser: ''
// }

export const getPassenger = (state = passengers, action) => {
    switch(action.type) {
        case GET_PASSENGERS:
            return {
                ...state
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            };
        default: 
            return state;
    }
}

export default getPassenger;
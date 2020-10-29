import { SET_SCHEDULE_FILTER,  
        GET_FLIGHTS } 
    from '../actions/actionTypes';
import flights from '../../data/flights.json';

export const ScheduleFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DEPARTURES: 'SHOW_DEPARTURES',
    SHOW_ARRIVALS: 'SHOW_ARRIVALS' 
}

export const getVisibleFlights = (flights, filter) => {
    switch(filter){
        case ScheduleFilters.SHOW_DEPARTURES:
            return flights.filter(t => t.status === 'departure');
        case ScheduleFilters.SHOW_ARRIVALS:
            return flights.filter(t => t.status === 'arrival');
        default: 
            return;
    }
}

export const displaySchedule = (state = flights, action) => {
    switch(action.type){
        case GET_FLIGHTS:
            return {
                ...state
            };
        case SET_SCHEDULE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default displaySchedule;
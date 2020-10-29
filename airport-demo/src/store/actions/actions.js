import { MOVE_TO, 
        DISPLAY,
        IS_BACK_BTN_CLICKED,
        SET_SCHEDULE_FILTER, 
        GET_FLIGHTS,
        CHOOSE_LANGUAGE,
        GET_PASSENGERS,
        GET_CURRENT_USER
    } 
    from '../actions/actionTypes';

const moveTo = component => (
    {
        typeID: MOVE_TO,
        component
    }
)

const display = list => (
    {
        type: DISPLAY,
        list
    }
)

const isBackBtnClicked = click => (
    {
        type: IS_BACK_BTN_CLICKED,
        click
    }
)

const chooseLanguage = lng => (
    {
        type: CHOOSE_LANGUAGE,
        payload: lng
    }
)

const getFlights = data => (
    {
        type: GET_FLIGHTS,
        data
    }
)

const setScheduleFilter = filter => (
    {
        type: SET_SCHEDULE_FILTER,
        filter
    }
)

const getPassengers = data => (
    {
        type: GET_PASSENGERS,
        data
    }
)

const getCurrentUser = currentUser => (
    {
        type: GET_CURRENT_USER,
        currentUser
    }
)



export default {
    moveTo,
    isBackBtnClicked,
    getFlights,
    getPassengers,
    getCurrentUser,
    setScheduleFilter,
    chooseLanguage
}
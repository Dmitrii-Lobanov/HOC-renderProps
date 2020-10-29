import { 
    MOVE_TO,
    DISPLAY,
    IS_BACK_BTN_CLICKED,
    CHOOSE_LANGUAGE
} from '../actions/actionTypes';
import settings from '../../config/settings';

const INITIAL_STATE = {
    lng: '',
    isBackBtnClicked: true,
    settings
}

export const ui = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MOVE_TO:
            return {
                ...state,
                component: action.component
            };
        case DISPLAY:
            return {
                ...state
            }
        case IS_BACK_BTN_CLICKED: 
            return {
                ...state,
                isBackBtnClicked: action.click
            }
        case CHOOSE_LANGUAGE:            
            return {
                ...state,
                lng: action.payload
            };
        default:
            return state;
    }
};

export default ui;
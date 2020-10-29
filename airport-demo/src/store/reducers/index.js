import { combineReducers } from 'redux';
import ui from '../reducers/ui';
import schedule from './schedule';
import passengers from './passengers';
import { createMiddleware, createReducer } from './helpers';
import routeMachine from '../../config/routeMachine';

const machine = routeMachine;

export default combineReducers({
    ui,
    schedule,
    passengers,
    machine: createReducer(machine.states)
});
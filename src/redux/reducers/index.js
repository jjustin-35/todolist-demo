import {combineReducers} from 'redux';
import {todolist} from './todolist';
import {display} from './display';

const rootReducer = combineReducers({
    todolist,
    display
});

export default rootReducer;
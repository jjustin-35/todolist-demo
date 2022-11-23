import { combineReducers } from 'redux';
import { todolist } from './todolist';
import { display } from './display';
import { toast } from './toast';

const rootReducer = combineReducers({
  todolist,
  display,
  toast,
});

export default rootReducer;

import * as actions from '../../constant/actionType';

export const display = (state = "SET_ALL", action) => {
    switch(action.type){
        case actions.GET_ISFINISHED_TRUE:
            return "SET_ISFINISHED_TRUE";
        case actions.GET_ISFINISHED_FALSE:
            return "SET_ISFINISHED_FALSE";
        default:
            return state;
    }
}
import * as actions from '../../constant/actionType';

export const display = (state = "all", action) => {
    switch(action.type){
        case actions.GET_ISFINISHED_TRUE:
            return "finished";
        case actions.GET_ISFINISHED_FALSE:
            return "unfinished";
        case actions.GET_ALL:
            return "all";
        default:
            return state;
    }
}
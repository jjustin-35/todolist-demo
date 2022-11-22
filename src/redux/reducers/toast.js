import * as actions from '../../constant/actionType';

export const toast = (state = [], action) =>{
    switch(action.type){
        case actions.POST_TOAST:
            return [
                action.payload , ...state
            ]
        case actions.DELETE_TOAST:
            return state.filter(toast => toast.id !== action.id)
        default:
            return state;
    }
}
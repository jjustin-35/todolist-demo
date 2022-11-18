import * as actions from '../../constant/actionType';

export const todolist = (state = [], action)=>{
    switch(action.type){
        case actions.ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case actions.REMOVE_TODO:
            return state.filter(todo => todo.id === action.id)
        case actions.UPDATE_TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.id){
                    todo.isFinished = !todo.isFinished;
                }

                return todo;
            })
        default:
            return state;
    }
}
import * as actions from '../../constant/actionType';

export const addTodo = (memo) => (id) => ({
    type: actions.ADD_TODO,
    payload: {
        memo,
        isFinished: false,
        id
    }
})

export const removeTodo = id => ({
    type: actions.REMOVE_TODO,
    id
})

export const patchToggleTodo = id => ({
    type: actions.PATCH_TOGGLE_TODO,
    id
})

export const getAll = () => ({
    type: actions.GET_ALL,
})
export const getIsFinishedTrue = () => ({
    type: actions.GET_ISFINISHED_TRUE
})
export const getIsFinishedFalse = () => ({
    type: actions.GET_ISFINISHED_FALSE
})

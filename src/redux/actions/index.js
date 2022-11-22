import * as actions from '../../constant/actionType';

export const postTodo = (memo) => (id) => ({
    type: actions.POST_TODO,
    payload: {
        memo,
        isFinished: false,
        id
    }
})

export const patchTodo = id => memo => ({
    type: actions.PATCH_TODO,
    payload: {
        id,
        memo
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

export const postToast = ({isSuccess, message, id})=>({
    type: actions.POST_TOAST,
    payload: {
        isSuccess,
        message,
        id
    }
})

export const deleteToast = (id) =>({
    type: actions.DELETE_TOAST,
    id
})
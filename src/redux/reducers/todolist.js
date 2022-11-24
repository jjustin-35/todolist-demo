import * as actions from '../../constant/actionType';

export const todolist = (state = [{ memo: 'finish the todolist', isFinished: false, id: '1111' }], action) => {
  switch (action.type) {
    case actions.POST_TODO:
      return [...state, action.payload];
    case actions.PUT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            memo: action.payload.memo,
          };
        }

        return todo;
      });
    case actions.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case actions.PUT_TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.isFinished = !todo.isFinished;
        }

        return todo;
      });
    default:
      return state;
  }
};

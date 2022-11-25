import * as actions from '../../constant/actionType';

const initState = {};

export const toast = (state = initState, action) => {
  switch (action.type) {
    case actions.POST_TOAST:
      return action.payload;
    case actions.DELETE_TOAST:
      return {};
    default:
      return state;
  }
};

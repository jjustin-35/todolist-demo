import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../redux/actions';
import propTypes from 'prop-types';
import ItemStyle from '../../components/Item';

const Item = ({ todo }) => {
  const dispatch = useDispatch();
  const { id } = todo;

  const onCheck = () => {
    dispatch(actions.patchToggleTodo(id));
  };

  const onDelete = () => {
    dispatch(actions.removeTodo(id));
    dispatch(
      actions.postToast({
        isSuccess: true,
        message: '刪除成功！',
        id: uuidv4(),
      }),
    );
  };

  const onEditFinished = (memo) => {
    if (!memo)
      return dispatch(
        actions.postToast({
          isSuccess: false,
          message: '編輯不可留空！',
          id: uuidv4(),
        }),
      );
    dispatch(actions.patchTodo(id)(memo));
    dispatch(
      actions.postToast({
        isSuccess: true,
        message: '編輯成功！',
        id: uuidv4(),
      }),
    );
  };

  return (
    <>
      <ItemStyle onCheck={onCheck} onEditFinished={onEditFinished} onDelete={onDelete} todo={todo} />
    </>
  );
};

Item.propTypes = {
  todo: propTypes.object,
};

export default Item;

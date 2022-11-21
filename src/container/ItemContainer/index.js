import React from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../../redux/actions';
import propTypes from 'prop-types';
import { ItemStyle } from '../../components/ItemStyle';

const Item = ({todo}) => {
  const dispatch = useDispatch();
  const {id} = todo;

  const onCheck = ()=>{
    dispatch(actions.patchToggleTodo(id));
  }

  const onDelete = ()=>{
    dispatch(actions.removeTodo(id))
  }

  return (
    <>
        <ItemStyle onCheck={onCheck} onDelete={onDelete} isFinished={todo.isFinished}>
          {todo.memo}
        </ItemStyle>
    </>
  )
}

Item.propTypes = {
  todo: propTypes.object,
}

export {Item};
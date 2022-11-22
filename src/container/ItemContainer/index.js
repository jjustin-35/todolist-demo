import React from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../../redux/actions';
import propTypes from 'prop-types';
import { ItemStyle } from '../../components/Item';

const Item = ({todo}) => {
  const dispatch = useDispatch();
  const {id} = todo;

  const onCheck = ()=>{
    dispatch(actions.patchToggleTodo(id));
  }

  const onDelete = ()=>{
    dispatch(actions.removeTodo(id))
  }

  const onEditFinished = (memo)=>{
    dispatch(actions.patchTodo(id)(memo));
  }

  return (
    <>
        <ItemStyle onCheck={onCheck} onEditFinished={onEditFinished} onDelete={onDelete} todo={todo}/>
    </>
  )
}

Item.propTypes = {
  todo: propTypes.object,
}

export {Item};
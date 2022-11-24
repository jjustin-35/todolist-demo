import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Item from '../ItemContainer';
import Message from '../../components/Message';
import ListStyle from '../../components/List';

const List = ({ tab }) => {
  const todolist = useSelector((state) => {
    const list = state.todolist;
    if (tab === 'finished') {
      return list.filter((item) => item.isFinished === true);
    } else if (tab === 'unfinished') {
      return list.filter((item) => item.isFinished === false);
    } else {
      return list;
    }
  });

  let content;
  if (todolist.length === 0) {
    content = <Message>There is nothing here...</Message>;
  } else {
    content = todolist.map((todo) => <Item todo={todo} key={todo.id} />);
  }

  return <ListStyle>{content}</ListStyle>;
};

List.propTypes = {
  tab: propTypes.string,
};

export default List;

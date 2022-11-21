import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Item } from '../ItemContainer';
import {Message} from '../../components/Message';

const List = ({tab}) => {
    const todolist = useSelector(state => {
        const list = state.todolist;
        if(tab === "finished"){
            return list.filter(item => item.isFinished === true);
        }else if(tab === "unfinished"){
            return list.filter(item => item.isFinished === false);
        }else{
            return list;
        }
    });

    if(todolist.length === 0){
        return (
            <Message>
                這裡沒有東西喔！
            </Message>
        )
    }

  return (
    <>
        {
            todolist.map(todo => <Item todo={todo} key={todo.id}/>)
        }
    </>
  )
}

List.propTypes = {
    tab: propTypes.string,
}

export {List};

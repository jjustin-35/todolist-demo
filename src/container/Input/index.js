import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import { addTodo } from '../../redux/actions';
import { InputStyle } from '../../components/InputStyle';

export const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const onInput = (e) => {
        setInput(e.target.value);
    }
    
    const onAdd = () => {
        const id = uuidv4();
        dispatch(addTodo(input)(id));
    }
  return (
    <>
        <InputStyle onAdd={onAdd} onInput={onInput}/>
    </>
  )
}
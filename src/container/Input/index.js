import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import { addTodo } from '../../redux/actions';
import { InputStyle } from '../../components/Input';

export const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const onInput = (e) => {
        setInput(e.target.value);
    }
    
    const onAdd = () => {
        const id = uuidv4();
        if(!input) return ;
        dispatch(addTodo(input)(id));
        setInput("");
    }
  return (
    <>
        <InputStyle onAdd={onAdd} onInput={onInput} input={input}/>
    </>
  )
}

import React from 'react';
import propTypes from 'prop-types';
import { InputWrapper, Input, AddButton } from './styled';

const InputStyle = ({onAdd, onInput, input}) => {
  return (
    <InputWrapper>
        <Input onChange={onInput} value={input}/>
        <AddButton onClick={onAdd}>
            新增
        </AddButton>
    </InputWrapper>
  )
}

InputStyle.propTypes = {
  onInput: propTypes.func,
  input: propTypes.string,
  onAdd: propTypes.func,
}

export {InputStyle};

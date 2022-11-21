import React from 'react';
import propTypes from 'prop-types';
import { InputWrapper, Input, AddButton } from './styled';

const InputStyle = ({onAdd, onInput}) => {
  return (
    <InputWrapper>
        <Input onChange={onInput}/>
        <AddButton onClick={onAdd}>
            新增
        </AddButton>
    </InputWrapper>
  )
}

InputStyle.propTypes = {
  onInput: propTypes.func,
  onAdd: propTypes.func,
}

export {InputStyle};

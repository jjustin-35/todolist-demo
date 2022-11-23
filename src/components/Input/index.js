import React from 'react';
import propTypes from 'prop-types';
import { InputWrapper, Input, AddButton } from './styled';
import Icon from '../Icon';

const InputStyle = ({ onAdd, onInput, input }) => {
  return (
    <InputWrapper>
      <Input onChange={onInput} value={input} />
      <AddButton onClick={onAdd}>
        <Icon fontSize='1.5rem'>add</Icon>
      </AddButton>
    </InputWrapper>
  );
};

InputStyle.propTypes = {
  onInput: propTypes.func,
  input: propTypes.string,
  onAdd: propTypes.func,
};

export default InputStyle;

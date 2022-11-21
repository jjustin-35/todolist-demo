import React from 'react';
import propTypes from 'prop-types';
import { ItemWrapper,Checkbox ,Text, Option } from './styled';

const ItemStyle = ({children, onCheck, onDelete, isFinished}) => {
  return (
    <ItemWrapper>
        <Checkbox defaultChecked={isFinished} onClick={onCheck}/>
        <Text isFinished={isFinished}>
            {children}
        </Text>
        <Option onClick={onDelete}>
            刪除
        </Option>
    </ItemWrapper>
  )
}

ItemStyle.propTypes = {
  children: propTypes.string,
  onCheck: propTypes.func,
  onDelete: propTypes.func,
  isFinished: propTypes.bool
}

export {ItemStyle};
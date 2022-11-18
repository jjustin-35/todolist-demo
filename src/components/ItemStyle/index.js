import React from 'react';
import { ItemWrapper,Checkbox ,Text, Option } from './styled';
import {data} from './data';

export const ItemStyle = ({onCheck, onDelete, isFinished}) => {
  return (
    <ItemWrapper>
        <Checkbox defaultChecked={data[0].isFinished} onClick={onCheck}/>
        <Text isFinished={isFinished}>
            {data[0].memo}
        </Text>
        <Option onClick={onDelete}>
            刪除
        </Option>
    </ItemWrapper>
  )
}

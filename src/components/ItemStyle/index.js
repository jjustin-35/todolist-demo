import React, {useState} from 'react';
import propTypes from 'prop-types';
import { ItemWrapper,Checkbox ,Text, Option, ContentWrapper, EditInput } from './styled';
import {Icon} from '../Icon';

const ItemStyle = ({memo, onCheck, onDelete, isFinished, onEditFinished}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(memo);

  const onEdit = ()=>{
    setIsEdit(!isEdit);
  }

  return (
    <ItemWrapper>
        <ContentWrapper show={!isEdit}>
          <Checkbox defaultChecked={isFinished} onClick={onCheck}/>
          <Text isFinished={isFinished}>
              {memo}
          </Text>
          <Option onClick={onEdit}>
            <Icon>edit</Icon>
          </Option>
          <Option onClick={onDelete}>
            <Icon>delete</Icon>
          </Option>
        </ContentWrapper>
        <ContentWrapper show={isEdit}>
          <EditInput preValue={memo} onChange={(e)=>setInput(e.target.value)}/>
          <Option onClick={()=> {setIsEdit(!isEdit); onEditFinished(input)}}>
            <Icon>done</Icon>
          </Option>
          
        </ContentWrapper>
    </ItemWrapper>
  )
}

ItemStyle.propTypes = {
  memo: propTypes.string,
  children: propTypes.string,
  onCheck: propTypes.func,
  onEditFinished: propTypes.func,
  onDelete: propTypes.func,
  isFinished: propTypes.bool,
}

export {ItemStyle};
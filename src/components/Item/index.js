import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {ItemWrapper, Text, Option, ContentWrapper, EditInput } from './styled';
import {Icon} from '../Icon';

const ItemStyle = ({onCheck, onDelete, onEditFinished, todo}) => {
  const {memo, isFinished} = todo;

  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(memo);
  const [isShow, setIsShow] = useState("");

  useEffect(()=>{
    if(isShow === false){
      setTimeout(()=> onDelete(), 250);
    }else if(isShow === ""){
      setIsShow(true);
    }
  }, [isShow])

  const onEdit = ()=>{
    setIsEdit(!isEdit);
  }

  return (
    <ItemWrapper isShow={isShow}>
        <ContentWrapper show={!isEdit}>
          <input type="checkbox" defaultChecked={isFinished} onClick={onCheck}/>
          <Text isFinished={isFinished}>
              {memo}
          </Text>
          <Option onClick={onEdit}>
            <Icon>edit</Icon>
          </Option>
          <Option onClick={()=> setIsShow(false)}>
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
  children: propTypes.string,
  onCheck: propTypes.func,
  onEditFinished: propTypes.func,
  onDelete: propTypes.func,
  todo: propTypes.object,
}

export {ItemStyle};
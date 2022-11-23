import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { ToastItem } from './styled';
import { Icon } from '../Icon';

const ToastStyle = ({isSuccess, children}) => {

  const [isShow, setIsShow] = useState("");

  useEffect(()=>{
    if(isShow === ""){
      setIsShow(true);
    }else if(isShow){
      setTimeout(()=>{
        setIsShow(false)
      }, 3000);
    }
  }, [isShow])

  return (
    <ToastItem isSuccess={isSuccess} isShow={isShow}>
        <Icon>{isSuccess ? "check_circle_outline" : "highlight_off"}</Icon>
        {children}
    </ToastItem>
  )
}

ToastStyle.propTypes = {
    isSuccess: propTypes.bool,
    children: propTypes.any,
}

export {ToastStyle};
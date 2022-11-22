import React from 'react';
import propTypes from 'prop-types';
import { ToastItem } from './styled';
import { Icon } from '../Icon';

const ToastStyle = ({isSuccess, children}) => {
  return (
    <ToastItem isSuccess={isSuccess}>
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
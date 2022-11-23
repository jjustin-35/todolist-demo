import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { ToastItem } from './styled';
import Icon from '../Icon';

const ToastStyle = ({ isSuccess, children }) => {
  const timer = useRef(3000);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setIsShow(!isShow);
      }, timer.current);
    }
  }, [isShow]);

  return (
    <ToastItem isSuccess={isSuccess} isShow={isShow}>
      <Icon>{isSuccess ? 'check_circle_outline' : 'highlight_off'}</Icon>
      {children}
    </ToastItem>
  );
};

ToastStyle.propTypes = {
  isSuccess: propTypes.bool,
  children: propTypes.any,
};

export default ToastStyle;

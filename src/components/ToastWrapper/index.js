import React from 'react';
import propTypes from 'prop-types';
import { ToastWrap } from './styled';

const ToastWrapper = ({ children }) => {
  return <ToastWrap>{children}</ToastWrap>;
};

ToastWrapper.propTypes = {
  children: propTypes.any,
};

export default ToastWrapper;

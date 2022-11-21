import React from 'react';
import propTypes from 'prop-types';
import {IconWrapper} from './styled';

const Icon = ({children}) => {
  return (
    <IconWrapper className="material-icons">
      {children}
    </IconWrapper>
  )
}

Icon.propTypes = {
    children: propTypes.string,
}

export {Icon};
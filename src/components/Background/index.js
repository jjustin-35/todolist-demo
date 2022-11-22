import React from 'react';
import propTypes from 'prop-types';
import { BackgroundStyle } from './styled';

const Background = ({children}) => {
  return (
    <BackgroundStyle>
        {children}
    </BackgroundStyle>
  )
}

Background.propTypes = {
    children: propTypes.object,
}

export {Background};
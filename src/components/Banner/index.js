import React from 'react';
import data from './data';
import {Brand} from './styled';

export const Banner = () => {
  return (
    <Brand apearance={data.apearance}>
        {data.title}
    </Brand>
  )
}

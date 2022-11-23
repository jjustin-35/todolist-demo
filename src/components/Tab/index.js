import React from 'react';
import propTypes from 'prop-types';
import { TabButton, TabButtons } from './styled';

const TabStyle = ({ options, onTab }) => {
  return (
    <TabButtons>
      {options.map((opt) => (
        <TabButton active={opt.active} key={opt.id} id={opt.id} onClick={onTab}>
          {opt.name}
        </TabButton>
      ))}
    </TabButtons>
  );
};

TabStyle.propTypes = {
  options: propTypes.array,
  onTab: propTypes.func,
};

export default TabStyle;

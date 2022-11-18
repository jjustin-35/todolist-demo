import React from 'react';
import { TabButton, TabButtons } from './styled';

export const Tab = () => {
    const options = [{ name: "全部", active: true}, {name: "已完成", active: false}, {name: "未完成", active: false}];
  return (
    <TabButtons>
        {options.map(opt=>(
            <TabButton active={opt.active}>
                {opt.name}
            </TabButton>
        ))}
    </TabButtons>
  )
}

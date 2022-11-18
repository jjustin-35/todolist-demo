import React from 'react';
import { TabButton, TabButtons } from './styled';

export const Tab = () => {
    const options = ["全部", "已完成", "未完成"];
  return (
    <TabButtons>
        {options.map(opt=>(
            <TabButton>
                {opt}
            </TabButton>
        ))}
    </TabButtons>
  )
}

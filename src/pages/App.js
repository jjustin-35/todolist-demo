import React from 'react';
import { useSelector } from 'react-redux';

import { TodolistWrapper } from '../components/TodolistWrapper';
import {Banner} from '../components/Banner';
import {Tab} from '../container/Tab';
import {List} from '../container/List';
import {Input} from '../container/Input';
import { Background} from '../components/Background';

function App() {
  document.title = "todolist";

  const display = useSelector(state => state.display);

  return (
    <Background>
      <TodolistWrapper>
          <Banner />
          <Input />
          <Tab />
          <List tab={display}/>
      </TodolistWrapper>
    </Background>
  );
}

export default App;

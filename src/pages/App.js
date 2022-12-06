import React, { useState } from 'react';

import TodolistWrapper from '../components/TodolistWrapper';
import { Banner } from '../components/Banner';
import Tab from '../containers/Tab';
import List from '../containers/List';
import { Input } from '../containers/Input';
import Background from '../components/Background';
import Toast from '../containers/Toast';

function App() {
  document.title = 'todolist';

  const [tab, setTab] = useState('all');

  return (
    <Background>
      <TodolistWrapper>
        <Banner />
        <Input />
        <Tab tab={tab} setTab={setTab} />
        <List tab={tab} />
      </TodolistWrapper>
      <Toast />
    </Background>
  );
}

export default App;

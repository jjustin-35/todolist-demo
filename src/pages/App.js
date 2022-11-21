import React from 'react';
import { useSelector } from 'react-redux';

import {Container, Row, Col} from '../global/styled';
import {Banner} from '../components/Banner';
import {Tab} from '../container/Tab';
import {List} from '../container/List';
import {Input} from '../container/Input';

function App() {
  document.title = "todolist";

  const display = useSelector(state => state.display);

  return (
    <div className="App">
      <Banner />
      <Container>
        <Row>
          <Col xs={6}>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Tab />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <List tab={display}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

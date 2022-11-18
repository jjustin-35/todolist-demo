import React from 'react';

import {Container, Row, Col} from '../global/styled';
import {Banner} from '../components/Banner';
import {Tab} from '../components/Tab';
import {Item} from '../components/ItemStyle';

function App() {
  return (
    <div className="App">
      <Banner />
      <Container>
        <Row>
          <Col xs={5}>
            <Tab />
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Item />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

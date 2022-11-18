import React from 'react';

import {Container, Row, Col} from '../global/styled';
import {Banner} from '../components/Banner';
import {Tab} from '../components/Tab';


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
      </Container>
    </div>
  );
}

export default App;

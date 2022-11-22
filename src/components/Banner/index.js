import React from 'react';
import {Brand} from './styled';
import {Container, Row, Col} from '../../global/gridSystem';

export const Banner = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Brand apearance="black">
          Todolist
          </Brand>
        </Col>
      </Row>
    </Container>
  )
}

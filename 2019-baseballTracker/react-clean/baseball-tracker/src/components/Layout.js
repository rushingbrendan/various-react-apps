import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
  <Container>
    <Row>
      <Col sm={3}>
        
      </Col>
      <Col sm={9}>
        {props.children}
      </Col>
    </Row>
  </Container>
);

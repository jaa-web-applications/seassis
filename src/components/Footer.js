import React, { Component } from 'react';
import { Row, Col, Navbar } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 12, offset: 2 }} md={{ span: 0, offset: 0 }}>
          <Navbar
            fixed='bottom'
            style={{
              backgroundColor: '#343F56',
              height: 100,
              paddingTop:25,
            }}
            variant='dark'
          >
            <Col
              xs={{ span: 5, offset: 0 }}
              md={{ span: 7, offset: 1 }}
              style={{ color: 'white' }}
            >
              <p>Code Vibes Developer&copy; 2021</p>
            </Col>
            <Col
              xs={{ span: 12, offset: 2 }}
              md={{ span: 2, offset: 2 }}
              style={{ color: 'white' }}
            >
              <p>Email: SeAssis@outlook.com</p>
              <p>Contact Us: +962 78 7002130</p>
            </Col>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

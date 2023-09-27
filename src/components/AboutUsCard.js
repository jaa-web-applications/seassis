import React, { Component } from 'react';
import Team from '../media/images/team.jpg';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
export default class AboutUsCard extends Component {
  render() {
    return (
      <Row>
        <h1 style={{ color: 'white' }}>Our Team Mates</h1>
        <Col style={{ marginBottom: 10 }} xs={{span:12,offset:0}}md={{ span: 12, offset: 3 }}>
          <Card
            style={{ width: 500, marginLeft: -25, marginRight: 'auto' }}
          >
            <Card.Img variant='top' src={Team} />
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

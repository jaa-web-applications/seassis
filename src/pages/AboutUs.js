import React, { Component } from 'react';
import AboutUsGrid from '../components/AboutUsGrid';
import AboutUsCard from '../components/AboutUsCard';
import { Container, Row } from 'react-bootstrap';
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <AboutUsCard />
          </Row>
          <Row>
            <AboutUsGrid />
          </Row>
        </Container>
      </div>
    );
  }
}

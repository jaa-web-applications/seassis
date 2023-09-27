import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import HomeGrid1 from '../media/images/HomeGrid1.jpg';
import HomeGrid2 from '../media/images/HomeGrid2.jpg';
export default class HomeGrid extends Component {
  render() {
    return (
      <Row>
        <Col xs={{span:7}} md={6}>
          <div class='card1'>
            <div class='box1'>
              <div class='content1'>
                <a class='anker' href='/RoadServices'>
                  <Image
                    style={{ width: 100, height: 400 }}
                    className='d-block w-100'
                    src={HomeGrid1}
                    alt='RoadService'
                    fluid
                  />
                </a>
                <h3 class='name'>Road Service</h3>
                <p class='para'>
                  If You need a guide or help while your traveling by your car
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={7} md={6} style={{marginBottom:50}}>
          <div class='card1'>
            <div class='box1'>
              <div class='content1'>
                <a class='anker' href='/HomeServices'>
                  <Image
                    className='d-block w-100'
                    style={{ width: 400, height: 400 }}
                    src={HomeGrid2}
                    alt='RoadService'
                    fluid
                    rounded
                  />
                </a>
                <h3 class='name'>Home Services</h3>
                <p class='para'>
                  If You need a help while you are at home in daily routine work
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

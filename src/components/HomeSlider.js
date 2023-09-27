import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomeSlider1 from '../media/images/HomeSlider1.jpg';
import HomeSlider2 from '../media/images/HomeSlider2.jpg';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
export default class HomeSlider extends Component {
  render() {
    return (
      <Col xs={{ span: 1, offset: 0 }} lg={{ span: 0, offset: 3 }}>
        <Carousel variant='dark' style={{ width: 485, height: 500 ,marginBottom:50}}>
          <Carousel.Item style={{ width: 'auto', height: 'auto' }}>
            <Image
              style={{ height: 500 }}
              className='d-block w-100'
              src={HomeSlider1}
              alt='First slide'
            />
            <Carousel.Caption
              style={{ color: 'white', fontSize: 35, marginLeft: '-35%' }}
            >
              <p>Get Help on Road</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ height: 500 }}
              className='d-block w-100'
              src={HomeSlider2}
              alt='Second slide'
            />
            <Carousel.Caption style={{ color: 'white', fontSize: 35 }}>
              <p>Get Help at Home</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    );
  }
}

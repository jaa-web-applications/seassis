import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RoadServiceContent extends Component {
  render() {
    return (
      <div>
        <Container style={{ color: 'white', marginTop: 50 }}>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 4, offset: 1 }}
              style={{ textAlign: 'center', padding: 30 }}
            >
              Our dedicated team of Customer Service professionals are on call
              24 hours a day, 7 days a week to provide assistance wherever our
              members are. All of our memberships include: Towing – Emergency
              towing can transport your vehicle to the nearest repairer up to
              the kilometre limits of your plan. Flat Battery – We’ll either
              provide a jump start or arrange a battery replacement if
              available, to help you on your way.
            </Col>
            <Col xs={{ span: 4, offset: 0 }} md={{ span: 4, offset: 1 }}>
              <img
                src='https://media.istockphoto.com/vectors/roadside-assistance-vector-id628095858'
                width='450px'
                height='300px'
                style={{borderRadius: '20px'}}
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 4, offset: 1 }}
              style={{ textAlign: 'center', padding: 30 }}
            >
              When you make contact with us we will verify your location and the
              problem you are experiencing and arrange for the appropriate
              service. We will confirm with our service provider and provide you
              with an estimated wait time. If there are any delay’s advised by
              our service providers, we will update you.
            </Col>
            <Col xs={{ span: 4, offset: 0 }} md={{ span: 4, offset: 1 }}>
              <img
                src='https://dealerimages.dealereprocess.com/image/upload/w_2136/1544533.jpg'
                width='450px'
                height='300px'
                style={{borderRadius: '20px'}}
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 4, offset: 1 }}
              style={{ textAlign: 'center', padding: 30 }}
            >
              Conveying meaning to assistive technologies Using color to add
              meaning only provides a visual indication, which will not be
              conveyed to users of assistive technologies – such as screen
              readers. Ensure that information denoted by the color is either
              obvious from the content itself (e.g. the visible text), or is
              included through alternative means, such as additional text hidden
              with the .visually-hidden class.
            </Col>
            <Col xs={{ span: 4, offset: 0 }} md={{ span: 4, offset: 1 }}>
              <img
                src='https://aaaliving.acg.aaa.com/wp-content/uploads/2019/04/aaa-roadside-assistance-benefits-mobile.jpg'
                width='450px'
                height='300px'
                style={{borderRadius: '20px'}}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const getSentimentDisplay = (pospol) => {
  const type = pospol?.[0] || 'neutral';
  const polarity = Number(pospol?.[1]);
  const percentage = Number.isFinite(polarity)
    ? Math.round(Math.abs(polarity) * 100)
    : 0;

  return { type, percentage, isPositive: type === 'positive' || type === 'neutral' };
};

export default class FeedbackSlider extends Component {
  render() {
    return (
      <>
        {this.props.Feedbacks.length ? (
          <Row>
            <Col xs={{ span: 1, offset: 0 }} lg={{ span: 0, offset: 3 }}>
              <Carousel style={{ width: 500, height: 500 ,marginBottom:50,marginLeft:-25}} itemsToShow={this.props.Feedbacks.length}>
                {this.props.Feedbacks.map((element) => {
                  const { type, percentage, isPositive } = getSentimentDisplay(element.pospol);

                  return (
                    <Carousel.Item key={element._id || `${element.name}-${element.feedback}`} style={{ width: 'auto', height: 'auto' }} >
                      <img
                        className='d-block w-100'
                        src='https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                        alt='User feedback'
                        rounded
                        style={{ height: 550, width: 300 }}
                      />
                      <Carousel.Caption
                        style={{
                          color: 'white',
                          marginLeft: '-40%',
                          marginBottom: '15%',
                        }}
                      >
                        <p style={{ fontSize: 25, marginBottom: '0%' }}>
                          User Experience
                        </p>
                        <p
                          style={{
                            color: isPositive ? 'green' : 'red',
                            fontSize: 50,
                            textTransform: 'capitalize',
                          }}
                        >
                          {type}
                        </p>
                        <p style={{ marginBottom: '20%' }}>
                          With Percentage {percentage}%
                        </p>
                      </Carousel.Caption>
                      <Carousel.Caption
                        style={{
                          color: 'white',
                          fontSize: 25,
                          marginBottom: '-5%',
                          marginLeft: '-15%',
                          width: 500,
                          height:350,
                        }}
                      >
                        <h3>{element.name}</h3>
                        <p>{element.feedback}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>
          </div>
        )}
      </>
    );
  }
}

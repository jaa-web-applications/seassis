import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
export default class FeedbackForm extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}>
          <div
            class='border border-warning'
            style={{
              borderRadius: '15px',
              backgroundColor: 'whitesmoke',
              marginBottom: 100,
              marginTop: 50,
            }}
          >
            <Form onSubmit={this.props.handelCreateFeedback}>
              <Row className='mb-3'>
                <Col md={{ span: 3, offset: 0 }}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Enter your name'
                    />
                  </Form.Group>
                </Col>
                <Col md={{ span: 3, offset: 0 }}>
                  <Form.Group
                    controlId='formGridZip'
                    style={{ marginRight: '15px' }}
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Add Your Email'
                    />
                  </Form.Group>
                </Col>
                <Col md={{ span: 3, offset: 0 }}>
                  <Form.Group
                    controlId='formGridZip'
                    style={{ marginRight: '15px' }}
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='number'
                      name='mobile'
                      placeholder='Add Your Phone'
                    />
                  </Form.Group>
                </Col>
                <Col md={{ span: 2, offset: 0 }}>
                  <Form.Control
                    as='select'
                    name='serviceType'
                    onChange={this.props.HandleLocation}
                    style={{ marginTop: '45px' }}
                  >
                    <option>service Type</option>
                    <option value='Home'>Home Service</option>
                    <option value='Road'>Road Service </option>
                  </Form.Control>
                </Col>
              </Row>
              <Col md={{ span: 0, offset: 0 }}>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control
                    style={{ height: 200 }}
                    name='feedback'
                    type='text'
                    placeholder='Enter your feedback about our Services'
                  />
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </Col>
              <div class='d-grid gap-2'>
                <Button
                  variant='warning'
                  type='submit'
                  style={{
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '5px',
                  }}
                >
                  Give A feedback
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

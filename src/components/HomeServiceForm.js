import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
class HomeServiceForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}>
          <div
            class='border border-warning'
            style={{
              borderRadius: '15px',
              backgroundColor: 'whitesmoke',
              marginBottom: 75,
            }}
          >
            <Form onSubmit={this.props.HandleCreateHomeService}>
              <Row className='mb-3'>
                <Col>
                  <Form.Group
                    className='mb-3'
                    controlId='formBasicEmail'
                    style={{ marginLeft: '15px' }}
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='Pesron_Name'
                      placeholder='Enter your name'
                    />
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='formBasicPassword'
                    onClick={this.props.HandleLocationHandleLocation}
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      as='select'
                      name='Pesron_Address'
                      onChange={this.props.HandleLocation}
                    >
                      <option>Choose your city</option>
                      <option value='Amman'>Amman</option>
                      <option value='Irbid'>Irbid</option>
                      <option value='Alsalt'>Alsalt</option>
                      <option value='Jerash'>Jerash</option>
                      <option value='Zarqa'>Zarqa</option>
                      <option value='Tafila'>Tafila</option>
                      <option value='Ajloun'>Ajloun</option>
                      <option value='Aqaba'>Aqaba</option>
                      <option value='Karak'>Karak</option>
                      <option value='Madaba'>Madaba</option>
                      <option value='Maan'>Maan</option>
                      <option value='Mafraq'>Mafraq</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    controlId='formGridZip'
                    style={{ marginRight: '15px' }}
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='number'
                      name='Pesron_Phone'
                      placeholder='Add Your Phone'
                    />
                  </Form.Group>
                  <Form.Group
                    controlId='formGridZip'
                    style={{ marginRight: '15px' }}
                  >
                    <Form.Label style={{ marginTop: 15 }}>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='Pesron_Email'
                      placeholder='Add Your Email'
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Label>Problem Description</Form.Label>
                  <Form.Control
                    style={{ height: 200 }}
                    name='Person_Description'
                    type='text'
                    placeholder='Add A Description To The Issue'
                  />
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </Col>
              <div
                class='d-grid gap-2'
                style={{
                  marginLeft: '15px',
                  marginRight: '15px',
                  marginBottom: '5px',
                }}
              >
                <Button variant='warning' type='submit'>
                  Ask For Help
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}
export default HomeServiceForm;

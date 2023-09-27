import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class UpdateModale extends Component {
  render() {
    // console.log(this.props);
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handelDisplayUpdateModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className='mb-3'>
              <Form.Label>Problem Description</Form.Label>
              <Form.Control
                type='text'
                name='Description'
                placeholder='Enter Problem Description'
                defaultValue={
                  this.props.previesServicesDatat.Person_Description
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type='text'
                name='personPhone'
                placeholder='Enter your number  '
                defaultValue={this.props.previesServicesDatat.Pesron_Phone}
              />
            </Form.Group>
            <Button class='btn btn-info' type='submit'>
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateModale;

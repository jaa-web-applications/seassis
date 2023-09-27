import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default class MessageModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.modalShow}
          onHide={this.props.handleModalShow}
          animation={true}
        >
          <Modal.Body>
            Your Request is on the way, and we will serve you as soon as
            possible
          </Modal.Body>

          <Button variant='secondary' onClick={this.props.handleModalShow}>
            Close
          </Button>
        </Modal>
      </div>
    );
  }
}

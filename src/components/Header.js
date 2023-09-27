import React, { Component } from 'react';
import { Container, Col, Navbar, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Logo from '../media/images/Logo.png';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar
            fixed='top'
            collapseOnSelect
            style={{
              backgroundColor: '#343F56',
              fontSize: 20,
              height: 100,
            }}
            variant='dark'
          >
            <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Col xs={{ span: 4 }}>
                  <Image
                    style={{
                      height: 200,
                      marginLeft: -80,
                    }}
                    src={Logo}
                    rounded
                  />
                </Col>
                <Nav style={{marginLeft:-150}}>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <NavDropdown
                    title='Services'
                    id='collasible-nav-dropdown'
                    style={{ marginTop: -5 }}
                  >
                    <NavDropdown.Item href='/HomeServices'>
                      HomeServices
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/RoadServices'>
                      RoadServices
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href='/Requests'>Requests</Nav.Link>
                  <Nav.Link href='/Feedback'>Feedback</Nav.Link>
                  <Nav.Link href='/AboutUs'>About Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SamahImage from '../media/images/samah.jpg';
import IbrahemImage from '../media/images/ibrahem.jpg';
import EhabImage from '../media/images/ehab.jpg';
import JehadImage from '../media/images/jehad.jpg';
import GharamImage from '../media/images/gharam.jpg';
import AhmadImage from '../media/images/ahmad.jpg';
import '../AboutUsGrid.css';
export default class AboutUsGrid extends Component {
  render() {
    return (
      <div>
        <Container class='square border border-0'>
          <Row>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 450 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={JehadImage}
                      alt='RoadService'
                      fluid
                      style={{ width: 500, height: 300 }}
                    />
                    <h3 class='name2'>Team Leader</h3>
                    <p class='name2'>Jad Abu Awwad</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/in/jadabuawwad/'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 400 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={SamahImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3 class='name2'>First Member</h3>
                    <p class='name2'>Samah Hamed</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/in/samah-hamed-948579171/'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 400 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={IbrahemImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3 class='name2'>Second Member</h3>
                    <p class='name2'>Ibrahim Bader</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/in/ibrahim-bader-35aa09164/'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 400 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={EhabImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3 class='name2'>Third Member</h3>
                    <p class='name2'>Ehab Ahmad</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/in/ehab-ahmad-748848162/'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 400 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={AhmadImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3 class='name2'>Fourth Member</h3>
                    <p class='name2'>Ahmad AbuTaifor</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/mwlite/in/ahmad-abuteifor-465647216'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card2'>
                <div class='box2'>
                  <div style={{ width: 400 }} class='content2'>
                    <Image
                      className='d-block w-100'
                      src={GharamImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3 class='name2'>Fifth Member</h3>
                    <p class='name2'>Gharam</p>
                    <a
                      class='anker2'
                      href='https://www.linkedin.com/in/gharam-alessa-4449901b9/'
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

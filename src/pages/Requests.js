import React, { Component } from 'react';
import UpdateModale from '../components/updateModale';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
require('dotenv').config();
class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
      showUpdateModal: false,
      previesServicesDatat: {},
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/services`)
      .then((servicesRes) => {
        this.setState({ services: servicesRes.data });
        console.log(this.state.services);
      })
      .catch((error) => alert(error.message));
  };
  handelService = (servicId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/services/${servicId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newServicArr = this.state.services.filter(
            (element) => element._id !== servicId
          );
          this.setState({ services: newServicArr });
        }
      })
      .catch(() => alert('something went wrong -check axios.delete function '));
  };

  handelUpdateModal = (e) => {
    e.preventDefault();
    const reqBody = {
      Pesron_Phone: e.target.personPhone.value,
      Person_Description: e.target.Description.value,
    };
    axios
      .put(
        `${process.env.REACT_APP_SERVER}/services/${this.state.previesServicesDatat._id}`,
        reqBody
      )
      .then((updateObject) => {
        const updateSarvice = this.state.services.map((item) => {
          if (item._id === this.state.previesServicesDatat._id) {
            item = updateObject.data;
            return item;
          }
          return item;
        });
        this.setState({
          services: updateSarvice,
          previesServicesDatat: {},
        });
        this.handelDisplayUpdateModal();
      })
      .catch(() => alert('Something went wrong!'));
  };

  handelDisplayUpdateModal = (serviceObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      previesServicesDatat: serviceObj,
    });
  };

  render() {
    return (
      <div>
        {this.state.showUpdateModal && (
          <>
            <UpdateModale
              show={this.state.showUpdateModal}
              handelUpdateModal={this.handelUpdateModal}
              handelDisplayUpdateModal={this.handelDisplayUpdateModal}
              previesServicesDatat={this.state.previesServicesDatat}
            />
          </>
        )}
        <>
          <Row style={{marginBottom:50}}>
            {this.state.services.length > 0 &&
              this.state.services.map((data) => {
                return (
                  <>
                    <Col md={3}>
                      <Card style={{ width: '18rem' ,marginTop:50}}>
                        <Card.Img variant='top' src={data.map} />
                        <div class='border border-warning'>
                          <Card.Body>
                            <Card.Title>{data.Pesron_Name}</Card.Title>
                            <Card.Text>{data.Person_Description}</Card.Text>
                            <Button
                              onClick={() => this.handelService(data._id)}
                              style={{
                                background: '#B8DFD8',
                                color: 'black',
                                borderColor: 'FFF200',
                              }}
                            >
                              Resolved Ticket
                            </Button>
                            {/* &nbsp;&nbsp; */}
                            <Button
                              onClick={() =>
                                this.handelDisplayUpdateModal(data)
                              }
                              style={{
                                background: '#FFB319',
                                color: 'black',
                                borderColor: 'FFF200',
                              }}
                            >
                              update
                            </Button>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </>
      </div>
    );
  }
}
export default Requests;

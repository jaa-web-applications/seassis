import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

import RoadServiceContent from '../components/RoadServiceContent';
import RoadServiceForm from '../components/RoadServiceForm';
import MessageModal from '../components/MessageModal';

const REACT_APP_IQ_URL = process.env.REACT_APP_IQ_URL;
const REACT_APP_IQ_KEY = process.env.REACT_APP_IQ_KEY;

class RoadServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: [],
      location: [],
      MapOfLocation: '',
      modalShow: false,
    };
  }
  handleModalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };
  HandleLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: [position.coords.latitude, position.coords.longitude],
      });

      const url2 = `${REACT_APP_IQ_URL}?key=${REACT_APP_IQ_KEY}&zoom=18&center=${this.state.location}&format=jpg`;
      axios.get(url2).then((mapResponse) => {
        this.setState({ MapOfLocation: mapResponse.request.responseURL });
      });
    });
  };
  HandleCreateRoadService = (e) => {
    e.preventDefault();
    const helpBody = {
      Pesron_Email: e.target.Pesron_Email.value,
      Pesron_Name: e.target.Pesron_Name.value,
      Person_Description: e.target.Person_Description.value,
      Pesron_Phone: e.target.Pesron_Phone.value,
      Pesron_Address: e.target.Pesron_Address.value,
      map: this.state.MapOfLocation,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER}/services`, helpBody)
      .then((createResponse) => {
        this.state.serviceData.push(createResponse.data);
        this.setState({ serviceData: this.state.serviceData });
      });
    this.handleModalShow();
  };
  render() {
    return (
      <>
        {this.state.showAlert && (
          <>
            <Alert variant='danger'>The Help is on the way</Alert>
          </>
        )}
        <RoadServiceContent />
        <RoadServiceForm
          HandleCreateRoadService={this.HandleCreateRoadService}
          HandleLocation={this.HandleLocation}
        />
        <MessageModal
          modalShow={this.state.modalShow}
          handleModalShow={this.handleModalShow}
        />
      </>
    );
  }
}
export default RoadServices;

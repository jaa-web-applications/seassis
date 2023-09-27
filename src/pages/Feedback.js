import React, { Component } from 'react';
import FeedbackSlider from '../components/FeedbackSlider';
import '../HomeGrid.css';
import FeedbackForm from '../components/FeedbackForm';
import axios from 'axios';
require('dotenv').config();
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Feedbacks: [],
    };
  }

  handelCreateFeedback = (e) => {
    e.preventDefault();
    const reqBody = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      serviceType: e.target.serviceType.value,
      feedback: e.target.feedback.value,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER}/feedback`, reqBody)
      .then((createResponse) => {
        this.state.Feedbacks.push(createResponse.data);
        this.setState({ Feedbacks: this.state.Feedbacks });
        this.handelDisplayAddModal();
      })
      .catch((error) => console.log(error));
  };
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/feedback`)

      .then((readResponse) => {
        this.setState({ Feedbacks: readResponse.data });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <FeedbackSlider Feedbacks={this.state.Feedbacks} />
        <FeedbackForm handelCreateFeedback={this.handelCreateFeedback} />
      </div>
    );
  }
}

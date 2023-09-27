import React, { Component } from 'react';
import HomeGrid from '../components/HomeGrid';
import HomeSlider from '../components/HomeSlider';

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeSlider />

        <HomeGrid />
      </>
    );
  }
}

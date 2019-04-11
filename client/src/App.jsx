import React, { Component } from 'react';
import Axios from 'axios';
import Homes from './Homes';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    const hostId = window.location.pathname.split('/')[2] || Math.floor(Math.random() * 100);
    Axios.get(`/similarhomes/${hostId}/nearby`)
      .then(res => this.setState({
        currentDisplay: res.data.slice(0, 3),
        next: res.data.slice(3),
        previous: [],
      }))
      .catch(err => console.error('Unable to complete: ', err));
  }

  handleNext() {
    const { previous, next, currentDisplay } = this.state;
    const newPrev = [...previous, currentDisplay.shift()];
    const newCurrent = [...currentDisplay, next.shift()];
    const newNext = next.slice(0);
    this.setState({
      previous: newPrev,
      currentDisplay: newCurrent,
      next: newNext,
    });
  }

  handlePrev() {
    const { previous, next, currentDisplay } = this.state;
    const newPrev = previous.length === 1 ? [] : previous.slice(0, previous.length - 1);
    let newCurrent = [previous.pop(), ...currentDisplay];
    newCurrent = newCurrent.slice(0, newCurrent.length - 1);
    const newNext = [currentDisplay.pop(), ...next];
    this.setState({
      previous: newPrev,
      currentDisplay: newCurrent,
      next: newNext,
    });
  }

  render() {
    const { currentDisplay, previous, next } = this.state;
    return currentDisplay ? <Homes data={currentDisplay} handleNext={this.handleNext} handlePrev={this.handlePrev} prev={previous} next={next} /> : 'no data';
  }
}

export default App;

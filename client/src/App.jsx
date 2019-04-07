import React, { Component } from 'react';
import Axios from 'axios';
import Homes from './Homes';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    Axios.get('/homes')
      .then(res => this.setState({ 
        homes: res.data,
        currentDisplay: res.data.slice(0, 3),
        next: res.data.slice(3),
        previous: [],
      }))
      .catch(err => console.error('Unable to complete: ', err));
  }

  handleNext() {
    const { previous, next, currentDisplay } = this.state;
    if (previous.length === 9) {
      console.log( 'conditional render arrow away');
    } else {
      const newPrev = [...previous, currentDisplay.shift()];
      const newCurrent = [...currentDisplay, next.shift()];
      const newNext = next.slice(0);
      this.setState({
        previous: newPrev,
        currentDisplay: newCurrent,
        next: newNext,
      });
    }
  }

  render() {
    const { currentDisplay, previous, next } = this.state;
    return currentDisplay ? <Homes data={currentDisplay} handleNext={this.handleNext} prev={previous} next={next} /> : 'no data';
  }
}

export default App;

import React, { Component } from 'react';
import Axios from 'axios';
import Homes from './Homes';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Axios.get('/homes')
      .then(res => this.setState({ 
        homes: res.data,
        currentDisplay: res.data.slice(0, 3),
        next: [],
        previous: [],
      }))
      .catch(err => console.error('Unable to complete: ', err));
  }
  handleNext() {
    this.state.previous.length === 9 ? 'conditional render arrow away'
  }

  render() {
    const { currentDisplay } = this.state;
    return currentDisplay ? <Homes data={currentDisplay} /> : 'no data';
  }
}

export default App;

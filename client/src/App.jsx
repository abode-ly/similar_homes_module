import React, { Component } from 'react';
import Axios from 'axios';
import Homes from './Homes';


class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  componentDidMount() {
    Axios.get('/homes')
      .then(res => this.setState({ homes: res.data }))
      .catch(err => console.error('Unable to complete: ', err));
  }

  render() {
    const { homes } = this.state;
    return homes ? <Homes data={homes} /> : 'no data';
  }
}

export default App;

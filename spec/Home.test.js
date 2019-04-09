import React from 'react';
import enzyme, { wrap, shallow, mount } from 'enzyme';
import axios from 'axios';
import Home from '../client/src/Homes';


describe('Home', () => {
  test('renders without crashing', () => {
    axios.get('/homes')
      .then(res => shallow(<Home data={res.data.slice(0, 3)} />));
  });
});

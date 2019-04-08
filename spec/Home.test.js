import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Home from '../client/src/Homes';

describe('Home', () => {
  it('renders without crashing', () => {
    mount(<Home />)
  });
});

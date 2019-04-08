import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Stars from '../client/src/Stars'

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Stars />)
  });
});

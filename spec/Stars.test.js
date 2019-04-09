import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Stars from '../client/src/Stars';

describe('Home', () => {
  test('renders without crashing', () => {
    shallow(<Stars />)
  });
});

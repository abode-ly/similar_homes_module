import React from 'react';
import  Enzyme, { shallow, mount } from 'enzyme';
import App from '../client/src/App';


describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  // it('has 3 state properties, currentDisplay, previous, and next', () => {
  //   const wrap = shallow(<App />);
  //   expect('currentDisplay' in wrap.props()).toEqual(true);
  //   expect('previous' in wrap.props()).toEqual(true);
  //   expect('next' in wrap.props()).toEqual(true);
  // });
});

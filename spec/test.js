import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../client/src/App';


describe('App', () => {
  it('should contain text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("#test")).toHaveText("Hello World, I'm a ReactJS component, aren't you jealous?");
  });
});

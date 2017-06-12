import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />', () => {
  it('should render an H1 tag with text Hello', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Hello');
  });
});

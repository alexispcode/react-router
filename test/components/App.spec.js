import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import CommentsWidget from '../../src/components/comments/CommentsWidget';

describe('<App />', () => {
  it('should render a CommentsPage', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentsWidget).exists()).toBeTruthy();
  });
});

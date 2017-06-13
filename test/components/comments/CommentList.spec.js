import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../../../src/components/comments/CommentList';

const setup = (overridesProps) => {
  const props = Object.assign({ comments: undefined }, overridesProps);
  const wrapper = shallow(<CommentList {...props} />);

  return wrapper;
};

describe('Tests for <CommentList/>', () => {
  it('should display a message when there is no comments', () => {
    const wrapper = setup({ comments: [] });
    expect(wrapper.find('.message .nocomments').text()).toBeDefined();
  });

  it('should render when comments are undefined', () => {
    const wrapper = setup();
    expect(wrapper.find('.message .nocomments').text()).toBeDefined();
  });

  it('should render some comments', () => {
    const testComments = ['joe, this app rocks', 'this is crazy', 'hey, this application is awesome'];
    const wrapper = setup({ comments: testComments });
    expect(wrapper.find('li').length).toEqual(3);
  });
});

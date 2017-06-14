import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../../../src/components/comments/CommentList';
import Comment from '../../../src/components/comments/Comment';

const setup = (overridesProps) => {
  const props = Object.assign({
    comments: undefined
  }, overridesProps);
  const wrapper = shallow(<CommentList {...props} />);

  return wrapper;
};

describe('Tests for <CommentList/>', () => {
  it('should display a message when there is no comments', () => {
    const wrapper = setup({ comments: [] });
    expect(wrapper.find('.message .nocomments').text()).toBeDefined();
  });

  it('should hide the message when there are comments', () => {
    const wrapper = setup({ comments: ['awesome', 'hello'] });
    const messageDiv = wrapper.find('.message .nocomments');
    expect(messageDiv.length).toEqual(0);
  });

  it('should render some comments', () => {
    const testComments = ['this app rocks', 'this is crazy', 'hey, this application is awesome'];
    const wrapper = setup({ comments: testComments });
    expect(wrapper.find(Comment).length).toEqual(testComments.length);
  });
});

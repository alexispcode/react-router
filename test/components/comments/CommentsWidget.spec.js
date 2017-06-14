import React from 'react';
import { shallow, mount } from 'enzyme';

import CommentsWidget from '../../../src/components/comments/CommentsWidget';
import InputComment from '../../../src/components/comments/InputComment';
import CommentList from '../../../src/components/comments/CommentList';

const handleProps = (overridesProps) => {
  const props = Object.assign({}, overridesProps);

  return props;
};

const shallowSetup = props => shallow(<CommentsWidget {...handleProps(props)} />);
const mountSetup = props => mount(<CommentsWidget {...handleProps(props)} />);

describe('Test for CommentsWidget', () => {
  it('should render an CommentList an InputComment', () => {
    expect(shallowSetup().containsAllMatchingElements([
      <CommentList />,
      <InputComment />
    ])).toBeTruthy();
  });

  it('initial state comments has to be and empty array', () => {
    expect(shallowSetup().state('comments')).toEqual([]);
  });

  it('add a comment to the list', () => {
    const wrapper = shallowSetup();
    wrapper.instance().addComment('comentario de prueba');
    expect(wrapper.state('comments')).toEqual(['comentario de prueba']);
  });

  it('should pass addComment to InputComment as prop', () => {
    const wrapper = shallowSetup();
    const inputComment = wrapper.find(InputComment);
    const addComment = wrapper.instance().addComment;
    expect(inputComment.prop('onSubmit')).toEqual(addComment);
  });

  it('should render items', () => {
    const wrapper = mountSetup();
    wrapper.instance().addComment('Awesome comment');
    wrapper.instance().addComment('Another awesome comment');
    expect(wrapper.find(CommentList).children().length).toEqual(2);
  });
});

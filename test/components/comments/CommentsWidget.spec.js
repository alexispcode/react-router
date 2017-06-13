import React from 'react';
import { shallow } from 'enzyme';
import CommentsWidget from '../../../src/components/comments/CommentsWidget';
import InputComment from '../../../src/components/comments/InputComment';
import CommentList from '../../../src/components/comments/CommentList';

const setup = (overridesProps) => {
  const props = Object.assign({}, overridesProps);
  const wrapper = shallow(<CommentsWidget {...props} />);

  return wrapper;
};

describe('Test for CommentsWidget', () => {
  it('should render an CommentList an InputComment', () => {
    expect(setup().containsAllMatchingElements([
      <CommentList />,
      <InputComment />
    ])).toBeTruthy();
  });

  it('initial state comments has to be and empty array', () => {
    expect(setup().state('comments')).toEqual([]);
  });

  it('add a comment to the list', () => {
    const wrapper = setup();
    wrapper.instance().addComment('comentario de prueba');
    expect(wrapper.state('comments')).toEqual(['comentario de prueba']);
  });

  it('should pass addComment to InputComment as prop', () => {
    const wrapper = setup();
    const inputComment = wrapper.find(InputComment);
    const addComment = wrapper.instance().addComment;
    expect(inputComment.prop('onSubmit')).toEqual(addComment);
  });
});

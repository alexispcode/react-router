import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../../../src/components/comments/Comment';

const setup = (overridesProps) => {
  const props = Object.assign({
    comment: undefined
  }, overridesProps);
  const wrapper = shallow(<Comment {...props} />);

  return wrapper;
};

describe('Tests for <Comment/>', () => {
  it('should render a div', () => {
    expect(setup().type()).toBe('div');
  });

  it('should render the comment', () => {
    const comment = 'test';
    expect(setup({ comment }).find('.content .text').text()).toEqual(comment);
  });
});

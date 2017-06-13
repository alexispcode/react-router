import React from 'react';
import { shallow, mount } from 'enzyme';
import InputComment from '../../../src/components/comments/InputComment';

const handleProps = (overridesProps) => {
  const props = Object.assign({
    onSubmit: () => {}
  }, overridesProps);

  return props;
};

const shallowSetup = props => shallow(<InputComment {...handleProps(props)} />);
const mountSetup = props => mount(<InputComment {...handleProps(props)} />);

describe('InputComment', () => {
  const testComment = 'Test Comment';

  it('should render a textarea', () => {
    expect(shallowSetup().find('textarea').exists()).toBeTruthy();
  });

  it('should have a button', () => {
    expect(shallowSetup().find('button').exists()).toBeTruthy();
  });

  it('should accept an input', () => {
    const wrapper = mountSetup();
    const textarea = wrapper.find('textarea');

    textarea.simulate('change', { target: { value: testComment } });

    expect(wrapper.state('comment')).toEqual(testComment);
    expect(textarea.prop('value')).toEqual(testComment);
  });

  describe('when the user submit the form', () => {
    it('should call on submit when button is clicked', () => {
      const onSubmit = jasmine.createSpy('onSubmit');
      const wrapper = mountSetup({ onSubmit });
      wrapper.setState({ comment: testComment });

      const button = wrapper.find('button');
      button.simulate('submit');

      expect(onSubmit).toHaveBeenCalledWith(testComment);
    });
  });
});

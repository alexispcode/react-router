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
  const TEST_COMMENT = 'Test Comment';

  it('should render a textarea', () => {
    expect(shallowSetup().find('textarea').first().exists()).toBeTruthy();
  });

  it('should have a button', () => {
    expect(shallowSetup().find('button').first().exists()).toBeTruthy();
  });

  it('should accept an input', () => {
    const wrapper = mountSetup();
    const textarea = wrapper.find('textarea');

    textarea.simulate('change', { target: { value: TEST_COMMENT } });

    expect(wrapper.state('comment')).toEqual(TEST_COMMENT);
    expect(textarea.prop('value')).toEqual(TEST_COMMENT);
  });

  describe('when the user submits the form', () => {
    let wrapper;
    let button;
    let onSubmit;

    beforeEach(() => {
      onSubmit = jasmine.createSpy('onSubmit');
      wrapper = mountSetup({ onSubmit });
      button = wrapper.find('button');
      wrapper.setState({ comment: TEST_COMMENT });
      button.simulate('submit');
    });

    it('should call on submit when button is clicked and return a comment', () => {
      expect(onSubmit).toHaveBeenCalledWith(TEST_COMMENT);
    });

    it('should clear the input after submit', () => {
      expect(wrapper.state('comment')).toEqual('');
    });
  });
});

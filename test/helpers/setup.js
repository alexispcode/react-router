import React from 'react';
import { shallow, mount } from 'enzyme';

const handleProps = (overridesProps) => {
  const props = Object.assign({
    onSubmit: () => {}
  }, overridesProps);

  return props;
};

export function shallowSetup(props) {
  return shallow(<InputComment {...handleProps(props)} />);
}
export function mountSetup(props) {
  return mount(<InputComment {...handleProps(props)} />);
}

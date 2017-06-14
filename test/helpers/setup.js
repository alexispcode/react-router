import React from 'react';
import { shallow, mount } from 'enzyme';

const handleProps = (overridesProps) => {
  const props = Object.assign({
  }, overridesProps);

  return props;
};

export function shallowSetup(Component, props) {
  return shallow(<Component {...handleProps(props)} />);
}
export function mountSetup(Component, props) {
  return mount(<Component {...handleProps(props)} />);
}

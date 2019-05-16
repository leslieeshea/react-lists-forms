import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a color', () => {
    const color = {
      name: 'Red',
      hex: '#ff0000',
      red: 255,
      green: 0,
      blue: 0
    };

    const wrapper = shallow(<Color name={color.name} hex={color.hex} red={color.red} green={color.green} blue={color.blue} />);
    expect(wrapper).toMatchSnapshot();
  });
});

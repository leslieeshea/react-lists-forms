import React from 'react';
import { shallow } from 'enzyme';
import ColorsList from './ColorsList';

describe('ColorsList component', () => {
  it('renders a list of colors', () => {
    const colors = [
      { name: 'Blue', hex: '#0000FF', red: 0, green: 0, blue: 255 },
      { name: 'Blue', hex: '#FF0000', red: 255, green: 0, blue: 0 }
    ];

    const wrapper = shallow(<ColorsList colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});

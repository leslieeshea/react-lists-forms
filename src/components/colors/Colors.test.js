import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders Colors', () => {
    const colors = [
      { name: 'Red', hex: '#FF0000' },
      { name: 'Blue', hex: '#0000FF' }
    ];

    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});

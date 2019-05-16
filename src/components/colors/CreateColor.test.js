import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  it('renders CreateColor', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates name on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'Red' }
    });

    expect(wrapper.state('name')).toEqual('Red');
  });

  it('updates color on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    wrapper.find('[name="color"]').at(0).simulate('change', {
      target: { name: 'color', value: '#FF0000' }
    });
  });

  it('handles submitting on new color', () => {
    const submit = jest.fn();
    const wrapper = shallow(<CreateColor addColor={submit} />);
    wrapper.find('form').at(0).simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(submit).toHaveBeenCalledWith({ name: wrapper.state('name'), hex: wrapper.state('color') });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders a list of Photos', () => {
    const photos = [
      '/photo1',
      '/photo2',
      '/photo3'
    ];

    const wrapper = shallow(<Photos photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});

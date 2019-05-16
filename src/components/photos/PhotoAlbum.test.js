import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('PhotoAlbum component', () => {
  it('renders a PhotoAlbum', () => {
    const photos = [
      '/photo1',
      '/photo2',
      '/photo3'
    ];

    const wrapper = shallow(<PhotoAlbum title="My Photos" photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});

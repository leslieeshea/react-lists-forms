import React from 'react';
import Header from './header/Header';
import PhotoAlbum from './photos/PhotoAlbum';
import puppy1 from '../assets/puppy1.jpg';
import puppy2 from '../assets/puppy2.jpg';
import puppy3 from '../assets/puppy3.jpg';
import puppy4 from '../assets/puppy4.jpg';
import puppy5 from '../assets/puppy5.jpg';
import puppy6 from '../assets/puppy6.jpg';
import puppy7 from '../assets/puppy7.jpg';
import puppy8 from '../assets/puppy8.jpg';

export default function App() {
  const photos = [
    puppy1,
    puppy2,
    puppy3,
    puppy4,
    puppy5,
    puppy6,
    puppy7,
    puppy8,
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Puppies Galore" photos={photos} />
    </>
  );
}

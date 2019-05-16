import React from 'react';
import Header from './Header';
import Colors from './ColorsList';

export default function App() {
  const colors = [
    { name: 'Pink', hex: '#ffa8b6', red: 255, green: 168, blue: 182 },
    { name: 'Blue', hex: '#30acff', red: 48, green: 172, blue: 255 },
    { name: 'Light Green', hex: '#edffd3', red: 237, green: 255, blue: 211 }
  ];

  return (
    <>
      <Header />
      <Colors colors={colors} />
    </>
  );
}

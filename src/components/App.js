import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  const [selected, updatedSelected] = useState('home');

  const content = {
    home: 'Welcome home!',
    about: 'Learn more about me.',
    blog: 'WoRk In PrOgReSs',
    contact: 'Nice try.'
  };

  return (
    <section className={styles.App}>
      <Sidebar>
        <a onClick={() => updatedSelected('home')} href="#">Home</a>
        <a onClick={() => updatedSelected('about')} href="#">About</a>
        <a onClick={() => updatedSelected('blog')} href="#">Blog</a>
        <a onClick={() => updatedSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}

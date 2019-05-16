import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(({ name, hex, red, green, blue }) => (
    <li key={`${name}-${hex}`}>
      <Color  name={name} hex={hex} red={red} green={green} blue={blue} />
    </li>
  ));

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;

import React from 'react';
import PropTypes from 'prop-types';

const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexFromRGB = (red, green, blue) => {
  return `#${hexFromColor(red)}${hexFromColor(green)}${hexFromColor(blue)}`;
};

function Color({ name, hex, red, green, blue }) {
  const hexColor = hexFromRGB(red, green, blue);

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hexColor,
    width: '0.8em',
    height: '0.8em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}<div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>Red - {red}</dd>
      <dd>Green - {green}</dd>
      <dd>Blue - {blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
};

export default Color;

import React from 'react';
import PropTypes from 'prop-types';
import toHexColor from '../services/rgb-converter';


function Color({ name, rgb }) {
  const { r, g, b } = rgb;
  const dlStyle = {
    color: toHexColor(rgb)
  };

  return (
    <dl style={dlStyle}>
      <dt>Name</dt>
      <dd>{ name }</dd>

      <dt>Hex</dt>
      <dd>{ toHexColor(rgb) }</dd>

      <dt>RGB</dt>
      <dd>Red - { r }</dd>
      <dd>Green - { g }</dd>
      <dd>Blue - { b }</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string,
  rgb: PropTypes.object.isRequired
};

export default Color;

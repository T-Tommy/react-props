import React from 'react';
import PropTypes from 'prop-types';

function toHex(rgb) {
  let hex = '';
  for(let n in rgb) {
    let h = rgb[n].toString(16);
    if(h.length === 1) h = '0' + h;
    hex += h;
  }
  return '#' + hex.toUpperCase();
}

function Color({ name, hex, rgb }) {
  const { r, g, b } = rgb;
  const dlStyle = {
    color: hex || toHex(rgb)
  };

  return (
    <dl style={dlStyle}>
      <dt>Name</dt>
      <dd>{ name }</dd>

      <dt>Hex</dt>
      <dd>{ hex || toHex(rgb) }</dd>

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

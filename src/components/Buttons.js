import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function Buttons({ colors }) {
  return (
    <>{ colors.map(color => <Button key={ color } color={ color } />) }</>
  );
}

Buttons.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Buttons;

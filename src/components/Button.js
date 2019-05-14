import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  handleClick = () => {
    console.log(this.props.color);
  }

  render() {
    const styles = { background: this.props.color.toLowerCase() };
    return (
      <button
        style={ styles }
        onClick={ this.handleClick }
      >
        { this.props.color }
      </button>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

Notification.defaultProps = {
  message: 'No feedback',
};

Notification.propTypes = {
  message: PropTypes.string,
};

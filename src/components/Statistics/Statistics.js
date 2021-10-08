import React from 'react';
import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
          <li>Total: {this.props.total}</li>
          <li>Positive feedback: {this.props.positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}

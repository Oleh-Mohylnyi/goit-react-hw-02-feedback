import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => {
          return (
            <button
              key={option}
              className="button"
              onClick={() => this.props.onLeaveFeedback(option)}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

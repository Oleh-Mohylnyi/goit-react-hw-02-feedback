import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['Good', 'Neutral', 'Bad'];

  onLeaveFeedback = key => {
    let optionKey = key.toLowerCase();
    this.setState(preState => {
      const newState = preState[optionKey] + 1;
      return { [optionKey]: newState };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (this.state.good !== 0) {
      positiveFeedbackPercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100,
      );
    }
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>{this.props.title}</h2>

        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Section;

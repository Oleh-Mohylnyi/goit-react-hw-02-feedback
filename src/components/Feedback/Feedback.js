import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(preState => {
      const newState = preState[key] + 1;
      return { [key]: newState };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
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
          options={['Good', 'Neutral', 'Bad']}
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

export default Feedback;

Feedback.defaultProps = {
  title: 'this is a feedback form',
};

Feedback.propTypes = {
  title: PropTypes.string,
};

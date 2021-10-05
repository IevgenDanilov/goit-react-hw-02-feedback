import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./FeedbackList.module.scss";
import Statistics from "../statistics/Statistics.jsx";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions.jsx";
import Section from "../section/Section.jsx";
import Notification from "../notification/Notification.jsx";

class FeedbackList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

  }


  onLeaveFeedback = (e) => {
    e.preventDefault();
    const currentStateName = e.currentTarget.name;
    this.setState(prevState => ({ [currentStateName]: 1 + prevState.[currentStateName], }));
    this.countTotalFeedback();
  };


  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;

  };
  
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(this.state.good / total * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    console.log(options);
    
    return (
        <div>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback.bind(this)} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="No feedback given!"/>}
          
        
        </Section>
        
        </div>
        );
  }
}

export default FeedbackList;

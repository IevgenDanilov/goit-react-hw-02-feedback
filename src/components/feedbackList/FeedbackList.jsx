import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./FeedbackList.module.scss";

class FeedbackList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    };

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick = (e) => {
    e.preventDefault();
    const currentStateName = e.currentTarget.name;
    this.setState(prevState => ({ [currentStateName]: 1 + prevState.[currentStateName], }));

    this.countTotalFeedback();
  };


  countTotalFeedback() {
    this.setState(prevState => ({ total: prevState.good + prevState.neutral + prevState.bad, }));
    this.countPositiveFeedbackPercentage();
  };
  
  countPositiveFeedbackPercentage() {
    this.setState(prevState => ({ positive: Math.round(prevState.good / prevState.total * 100), }));
  };

  render() {
    const { handleClick } = this;

    return (
      <div>
        <div>
          <p className={styles.title}>Please leave feedback</p>
          <button
            type="button"
            name="good"
            className={styles.btn}
            onClick={handleClick}
          >
            Good &#11088;&#11088;&#11088;
          </button>
          <button
            type="button"
            name="neutral"
            className={styles.btn}
            onClick={handleClick}
          >
            Neutral &#11088;&#11088;
          </button>
          <button
            type="button"
            name="bad"
            className={styles.btn}
            onClick={handleClick}
          >
            Bad &#11088;
          </button>
        </div>
        <div>
          <p className={styles.title}>Statistics</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Good: {this.state.good}</li>
            <li className={styles.listItem}>Neutral: {this.state.neutral}</li>
            <li className={styles.listItem}>Bad: {this.state.bad}</li>
            <li className={styles.listItem}>Total: {this.state.total}</li>
            <li className={styles.listItem}>Positive feedback: {this.state.positive}%</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackList;

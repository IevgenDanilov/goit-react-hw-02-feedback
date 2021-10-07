import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((name, idx) => (
      <button
        type="button"
        className={styles.btn}
        key={name}
        name={name}
        onClick={onLeaveFeedback}
      >
        {name}
        {(idx === 0 && "⭐⭐⭐") ||
          (idx === 1 && "⭐⭐") ||
          (idx === 2 && "⭐")}
      </button>
    ))}
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

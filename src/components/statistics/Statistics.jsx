import React from "react";
import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <ul className={styles.list}>
      <li className={styles.listItem}>Good: {good}</li>
      <li className={styles.listItem}>Neutral: {neutral}</li>
      <li className={styles.listItem}>Bad: {bad}</li>
      <li className={styles.listItem}>Total: {total ? total : "0"}</li>
      <li className={styles.listItem}>
        Positive feedback: {positivePercentage ? positivePercentage : "0"}%
      </li>
    </ul>
  </section>
);

export default Statistics;

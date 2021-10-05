import styles from "./Notification.module.scss";

const Notification = ({ message }) => {
  return <h2 className={styles.notif}>{message}</h2>;
};

export default Notification;

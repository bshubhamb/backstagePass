import React from "react";
import styles from "./submission-card.module.css";

const SubmissionCard = ({userName, avatar}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImage}>
        <img className={styles.image} src={avatar} alt={`${userName}'s avatar`} />
      </div>
      <div className={styles.placeholderText}>
        Share what you completed today!!
      </div>
    </div>
  );
};

export default SubmissionCard;

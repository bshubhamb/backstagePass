import styles from "./submissionForm.module.css";

const SubmissionForm = ({userName, avatar}) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatar} alt={`${userName}'s avatar`} />
      </div>
    </div>
  );
}

export default SubmissionForm;


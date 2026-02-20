import styles from './reactions.module.css';

const Reactions = ({reactions}) => {
  return (
    <div className={styles.container}>
      <div className={styles.reactButtons}>
        <div className={styles.likes}>
            <span role="img" aria-label="like">👍</span>
            <span>{reactions.likes}</span>
        </div>
        <div className={styles.emoji}>
            <span role="img" aria-label="emoji">😀</span>
        </div>
        <div className={styles.comment}>
            <span role="img" aria-label="comment">💬</span>
        </div>
      </div>
      <div className={styles.commentCount}>
        {reactions.comments} Comments
      </div>
    </div>
  );
}

export default Reactions;
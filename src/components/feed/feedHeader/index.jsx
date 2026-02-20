import styles from "./feed-header.module.css";

const FeedHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>See what others </span>
        <span role="img" aria-label="heart" className={styles.images}>
          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />
        </span>
        <span>shared</span>
      </div>
      <div className={styles.header}>
        <span role="img" aria-label="filter">🔍</span>
        <strong>85+</strong><span>participants already completed</span>
      </div>
    </div>
  );
}

export default FeedHeader;
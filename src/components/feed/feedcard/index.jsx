import React from "react";
import styles from "./feedcard.module.css";
import Reactions from "./reactions";

const FeedCard = ({cardData}) => {

  return (
    <div className={styles.card}>
      {cardData.isPinned && <div className={styles.pinned}>📌This is a pinned post</div>}
      <div className={styles.header}>
        <div className={styles.userProfile}>
          <img className={styles.avatar} src={cardData.avatar} alt="User Avatar" />
          <div className={styles.userInfo}>
            <div className={styles.userName}>{cardData.userName}</div>
            <span className={styles.time}>{cardData.time}</span>
          </div>
        </div>
        <div className={styles.moreButton}>⋯</div>
      </div>
      <p className={styles.content}>
        {cardData.content.text}
      </p>
      {cardData.content.image && (
        <div className={styles.imageContainer} style={{backgroundImage: `url(${cardData.content.image})`}}>
          <img className={styles.image} src={cardData.content.image} alt="Content Image" />
        </div>
      )}

    <Reactions reactions={cardData.reactions} />
    </div>
  );
};

export default FeedCard;

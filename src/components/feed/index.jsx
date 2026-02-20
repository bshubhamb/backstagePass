import React from "react";
import styles from "./feed.module.css";
import FeedCard from "./feedcard";
import FeedHeader from "./feedHeader";

const Feed = ({feedData}) => {
  console.log(feedData, "<<><>");
  return (
    <div className={styles.container}>
      <FeedHeader />
      {feedData.map((item) => (
        <FeedCard key={item.id} cardData={item} />
      ))}
    </div>
  );
};

export default Feed;

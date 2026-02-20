import React from "react";
import styles from "./header.module.css";

const Header = ({ theme, toggleTheme, avatar, userName }) => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.top}>
              <div className={styles.brand}>
        <span>(())</span> BackstagePass
      </div>
      <div className={styles.actions}>
        <div className={styles.streak}>
          <span>🔥</span> 30
        </div>
        <button onClick={toggleTheme} className={styles.themeBtn}>
          {theme.name === "light" ? "🌙" : "☀️"}
        </button>
        <img
          src={avatar || "https://picsum.photos/200/200"}
          className={styles.avatar}
          alt={`${userName}'s avatar`}
        />
      </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <span>Back</span>
          <span>Day 1 of 9</span>
        </div>
        <div className={styles.right}>
          <span>9 day fitness challenge!!</span>
          
        </div>
      </div>

    </header>
  );
};

export default Header;

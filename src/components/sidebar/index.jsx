import React from "react";
import styles from "./sidebar.module.css";

const Sidebar = ({ activeDay, setActiveDay }) => {
  const days = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    isLocked: i > 1, // Days 2-9 are locked
  }));

  return (
    <nav className={styles.sidebar}>
      {days.map((day, i) => (
        <button
          key={day.id}
          className={`${styles.dayBtn} ${
            activeDay === day.id ? styles.active : ""
          } ${day.isLocked ? styles.locked : ""}`}
          onClick={() => !day.isLocked && setActiveDay(day.id)}
        >
          {i > 0 && i < 10 ? (
          <>
          <span className={day.isLocked ? styles.blurred : ""}>
            Day - {day.id}
          </span>
          {activeDay === day.id && <span className={styles.indicator}>🕒</span>}
          {day.isLocked && <span>🔒</span>}
          </>) : null}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;

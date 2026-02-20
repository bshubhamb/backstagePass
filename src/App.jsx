import React, { useState, useEffect } from "react";
import "./App.css"
// Lowercase directory imports
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SubmissionCard from "./components/submissionCard";
import Feed from "./components/feed";
import { useTheme } from "../theme/ThemeContext";

import { FEED_DATA } from "./constants/mockData";

function App() {
  const [activeDay, setActiveDay] = useState(1);
  const { theme, setTheme } = useTheme();

  // Logic for Light/Dark mode support
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? "dark" : "light");
  };

  console.log(FEED_DATA, "LLLLLLLLLLLLL");

  const userName = FEED_DATA[Math.floor(Math.random() * 1000)]?.userName || "Anonymous";

  return (
    <div className={"appWrapper"}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className={"mainLayout"}>
        <Sidebar activeDay={activeDay} setActiveDay={setActiveDay} />

        <main className={"contentArea"}>
          <div className={"feedList"}>
            <SubmissionCard userName={userName} avatar="https://picsum.photos/200/200" />

            <Feed feedData={FEED_DATA} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

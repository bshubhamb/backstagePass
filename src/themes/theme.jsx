import { useEffect, useMemo, useState } from "react";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { ThemeContext } from "./ThemeContext";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


export default function ThemeProvider({ children }) {

    const [themeName, setThemeName] = useState("light");
    const theme = useMemo(() => themes[themeName], [themeName]);

    const setTheme = (name) => {
        setThemeName(name);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

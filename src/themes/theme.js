import { createContext, useContext, useEffect, useMemo, useState } from "react";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


export const ThemeContext = createContext(null);


export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}


export default function ThemeProvider({ children }) {

    const [themeName, setThemeName] = useState("light");
    const theme = useMemo(() => themes[themeName], [themeName]);

    const setTheme = (name) => {
        setThemeName(name);
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeName);
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

import React from "react";

export const themes = {
  light: {
    foreground: "#202c37",
    background: "#fafafa",
    icon: "moon",
  },
  dark: {
    foreground: "#fafafa",
    background: "#202c37",
    icon: "sun",
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;

import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const themes = {
  light: {
    foreground: "#202c37",
    background: "#fafafa",
    icon: faMoon,
  },
  dark: {
    foreground: "#fafafa",
    background: "#202c37",
    icon: faSun,
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;

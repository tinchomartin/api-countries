import React, { useContext } from "react";
import ThemeContext from "../../utils/context";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      {children}
    </div>
  );
}

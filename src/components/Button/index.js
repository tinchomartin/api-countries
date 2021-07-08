import React, { useContext } from "react";
import ThemeContext from "../../utils/context";

export function Button() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.foreground }}
      >
        {/* TODO */}
        {/* descargar svg de luna/sol para el button theme */}
        <i className="{fas fa-`${theme.icon}`}"></i>
        Change Theme
      </button>
    </div>
  );
}

export default Button;

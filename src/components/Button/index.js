import React, { useContext } from "react";
import ThemeContext from "../../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.foreground }}
      >
        <FontAwesomeIcon icon={theme.icon} />
        Change Theme
      </button>
    </div>
  );
}

export default Button;

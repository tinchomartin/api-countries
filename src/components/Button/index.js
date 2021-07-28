import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from "@chakra-ui/react";

export default function Button() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <button onClick={toggleColorMode}>
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />
        Change Theme
      </button>
    </div>
  );
}

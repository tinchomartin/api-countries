import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

export default function ButtonTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button
        onClick={toggleColorMode}
        border="none"
        backgroundColor=" transparent"
        cursor="pointer"
        _focus={{ outline: "none", backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
      >
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />

        <Box as="span" ml="0.3rem">
          Change Theme
        </Box>
      </Button>
    </Box>
  );
}

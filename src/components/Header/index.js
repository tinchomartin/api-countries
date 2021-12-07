import React from "react";
import ButtonTheme from "../Button";
// import "./Header.css";
import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={{ base: "1rem 5px", sm: "1rem 2.7rem" }}
        boxShadow="rgb(0 0 0 / 10%) 0px 0px 8px"
        marginBottom="2.5rem"
      >
        <Heading as="h1" fontSize={{ base: "15px", sm: "1.2rem" }}>
          Where in the World?
        </Heading>
        <ButtonTheme />
      </Box>
    </header>
  );
}

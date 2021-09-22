import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Fonts from "./utils/fonts";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

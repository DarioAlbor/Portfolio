import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./theme";
// 1. UI usando CHAKRA UI
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App/>
    </React.StrictMode>
  </ChakraProvider>
);
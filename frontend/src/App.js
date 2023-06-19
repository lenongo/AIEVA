import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './Components/Header';
import Top from './Components/Top';
import SplitScreen from './Components/SplitScreen';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box textAlign="center" fontSize="xl">
          <Top />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

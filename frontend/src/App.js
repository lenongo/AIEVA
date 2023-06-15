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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <SplitScreen leftPanel={<Sidebar />} rightPanel={<Top />} />
      </Box>
    </ChakraProvider>
  );
}

export default App;

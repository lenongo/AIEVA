import { Box } from '@chakra-ui/react';

const SplitScreen = ({ leftPanel, rightPanel }) => {
  return (
    <Box display="flex" height="100vh">
      <Box flex="1" maxW="20vw">
        {leftPanel}
      </Box>
      <Box flex="1">{rightPanel}</Box>
    </Box>
  );
};

export default SplitScreen;

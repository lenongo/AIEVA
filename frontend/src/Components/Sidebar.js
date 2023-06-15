import { Box, Button } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      bg="cyan.500"
      color="white"
      width="20vw"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* ヘッダーのコンテンツを追加 */}
      <Button mt="3vh">Wallet Connect</Button>
    </Box>
  );
};

export default Sidebar;

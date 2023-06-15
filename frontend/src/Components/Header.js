import { Box, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      bg="cyan.500"
      color="white"
      width="100%"
      height="5vh"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* ヘッダーのコンテンツを追加 */}
      <Button
        bg="teal.500"
        color="white"
        size="sm"
        mt="1vh"
        height="3vh"
        ml="50vw"
      >
        Wallet Connect
      </Button>
    </Box>
  );
};

export default Header;

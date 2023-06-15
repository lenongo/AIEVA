import { Box, Button, Link, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg="cyan.500"
      color="white"
      width="20vw"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        ml="2.5vw"
        width="15vw"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      {/* ヘッダーのコンテンツを追加 */}
      <Button
        bg="white"
        color="black"
        mt="3vh"
        width="15vw"
        onClick={() => navigate('/')}
      >
        Top
      </Button>
      <Button bg="white" color="black" mt="3vh" width="15vw">
        Task Review
      </Button>

      <Button
        bg="white"
        color="black"
        mt="3vh"
        width="15vw"
        onClick={() => navigate('/receive')}
      >
        Receive
      </Button>
    </Box>
  );
};

export default Sidebar;

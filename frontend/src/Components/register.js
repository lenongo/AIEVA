import {
  Box,
  Text,
  Avatar,
  Button,
  Image,
  Select,
  Center,
  Input,
} from '@chakra-ui/react';
import reject from './reject.png';
import approve from './approve.png';
import usdc from './usdc.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // 遷移先のパスを指定
  };
  return (
    <>
      <Box>
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          ⚒Who assign
        </Text>
        <Select
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        >
          <option fontWeight="bold" fontSize="40px" value="option1">
            Shun Funaki
          </option>
          <option fontWeight="bold" value="option2">
            Haruki Nishio
          </option>
          <option fontWeight="bold" value="option3">
            Kakeru Hirayama
          </option>
        </Select>
      </Box>

      <Box>
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          💻Where is your blanch?
        </Text>
        <Input
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        ></Input>
      </Box>
      <Box>
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          💰How much is this job?
        </Text>
        <Input
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        ></Input>
      </Box>
      <Center display="flex" width="100%" alignItems="center">
        <Button
          width="340px"
          mt="50px"
          height="50px"
          bg={'#1B7CB7'}
          color={'#FFFFFF'}
          _hover={'#000000'}
          onClick={handleButtonClick}
        >
          Create a job!
        </Button>
      </Center>
    </>
  );
};

export default Register;

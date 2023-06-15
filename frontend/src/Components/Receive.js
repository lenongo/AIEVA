import { Box, Text, Avatar, Button } from '@chakra-ui/react';

const Receive = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="1rem"
        ml="5vw"
        mt="3vh"
      >
        <Text fontWeight="bold" mr="2vw">
          {'Icon'}
        </Text>

        <Text fontWeight="bold" mr="2vw">
          {'Your Name'}
        </Text>
        <Text fontWeight="bold">{'Your Task'}</Text>
        <Text ml="70px" fontWeight="bold">
          {'Progress rate'}
        </Text>

        <Text ml="5vw" fontWeight="bold">
          Claim Button
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="1rem"
        ml="5vw"
        mt="3vh"
      >
        <Avatar src={'user'} name={'username'} marginRight="1rem" />

        <Text fontWeight="bold" mr="2vw">
          {'ShunFunaki'}
        </Text>
        <Text>{'Create AITuber'}</Text>
        <Text ml="2vw">{'100%'}</Text>

        <Button ml="10vw">Accept & Claim this Task</Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="1rem"
        ml="5vw"
        mt="3vh"
      >
        <Avatar src={'user'} name={'username'} marginRight="1rem" />

        <Text fontWeight="bold" mr="2vw">
          {'ShunFunaki'}
        </Text>
        <Text>{'Create AITuber'}</Text>
        <Text ml="2vw" mr="10px">
          {'10%'}
        </Text>

        <Button ml="10vw">Accept & Claim this Task</Button>
      </Box>
    </>
  );
};

export default Receive;

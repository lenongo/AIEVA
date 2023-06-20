import { Box, Avatar, Text, Button, Image, Center } from '@chakra-ui/react';
import reject from './reject.png';
import approve from './approve.png';

const ConversationItem = ({ userIcon, username, message, approval, time }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="1rem"
        width="840px"
        height="180px"
        borderRadius="16px"
        ml="5vw"
        mt="3vh"
        bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
      >
        <Avatar
          position={'relative'}
          top={'-39'}
          ml="30px"
          src={userIcon}
          name={username}
          marginRight="1rem"
        />
        <Box position={'relative'} top={'-39'} width="120px">
          <Text fontWeight="bold"> {username}</Text>
        </Box>
        <Box position={'relative'} top={'-39'} width="435px">
          <Text>{message}</Text>
        </Box>

        {approval === 'Approve' ? (
          <>
            <Image position={'relative'} top={'-39'} mr="5px" src={approve} />
            <Text position={'relative'} top={'-39'} color="#20A14C">
              {approval}
            </Text>
          </>
        ) : approval === 'Reject' ? (
          <>
            <Image position={'relative'} top={'-39'} mr="5px" src={reject} />
            <Text position={'relative'} top={'-39'} color="#E21111">
              {approval}
            </Text>
          </>
        ) : (
          <>
            {' '}
            <Text position={'relative'} top={'-39'} color="#FFFFFFF">
              {approval}
            </Text>
          </>
        )}
      </Box>
      <Box position="relative" ml={'720px'} top={'-59'} fontSize="18px">
        <Text>{time}</Text>
      </Box>
    </>
  );
};

export default ConversationItem;

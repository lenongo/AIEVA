import { Box, Avatar, Text } from '@chakra-ui/react';

const ConversationItem = ({ userIcon, username, message }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      marginBottom="1rem"
      ml="5vw"
      mt="3vh"
    >
      <Avatar src={userIcon} name={username} marginRight="1rem" />

      <Text fontWeight="bold" mr="2vw">
        {username}
      </Text>
      <Text>{message}</Text>
    </Box>
  );
};

export default ConversationItem;

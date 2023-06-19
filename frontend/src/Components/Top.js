import { Box, Button, Heading, Text, Center } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversationItem from './ConversationItem';
import Receive from './Receive';
import Header from './Header';
import Receipt from './Receipt';
import Register from './register';

const Top = () => {
  const conversations = [
    {
      id: 1,
      userIcon: 'user1.png',
      username: 'John',
      message: 'Hello, how are you?',
      approval: 'Approve',
      time: '2021/10/10 10:00',
    },
    {
      id: 2,
      userIcon: 'user2.png',
      username: 'Jane',
      message: "I'm doing well, thank you!",
      approval: 'Reject',
      time: '2021/10/10 10:00',
    },
    // 他の会話データを追加
  ];
  const history = [
    {
      id: 1,
      userIcon: 'user1.png',
      username: 'John',
      coin: '100',
      approval: 'Approve',
      time: '2021/10/10 10:00',
    },
    {
      id: 2,
      userIcon: 'user2.png',
      username: 'Jane',
      coin: '200',
      approval: 'Reject',
      time: '2021/10/10 10:00',
    },
  ];
  return (
    <div>
      <Box
        bgGradient="linear(to-tr, #2CA0E7, #D1FFE4)" // Set the linear gradient from bottom left to top right
        width="100vw"
        height="100vh"
        textAlign="left"
      >
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Text
                  pt="2vh"
                  fontSize="24px"
                  fontFamily={'body'}
                  fontWeight="bold"
                  ml="5vw"
                  mt={'3vh'}
                >
                  Your Team Work
                </Text>
                {conversations.map(conversation => (
                  <ConversationItem
                    ml="50vw"
                    key={conversation.id}
                    userIcon={conversation.userIcon}
                    username={conversation.username}
                    message={conversation.message}
                    approval={conversation.approval}
                    time={conversation.time}
                  />
                ))}
                <Center display="flex" width="100%" alignItems="center">
                  <Button
                    width="340px"
                    mt="50px"
                    height="50px"
                    bg={'#1B7CB7'}
                    color={'#FFFFFF'}
                    _hover={'#000000'}
                  >
                    Invite Team Member
                  </Button>
                </Center>
              </>
            }
          />
          <Route
            path="/receive"
            element={
              <>
                <Text
                  pt="2vh"
                  fontSize="24px"
                  fontFamily={'body'}
                  fontWeight="bold"
                  ml="5vw"
                  mt={'3vh'}
                >
                  Receive ASTR
                </Text>
                {history.map(history => (
                  <Receive
                    ml="50vw"
                    key={history.id}
                    userIcon={history.userIcon}
                    username={history.username}
                    coin={history.coin}
                    approval={history.approval}
                    time={history.time}
                  />
                ))}
              </>
            }
          />
          <Route
            path="/receipt"
            element={
              <>
                <Text
                  pt="2vh"
                  fontSize="24px"
                  fontFamily={'body'}
                  fontWeight="bold"
                  ml="5vw"
                  mt={'3vh'}
                >
                  Receipt ASTR
                </Text>
                {history.map(history => (
                  <Receipt
                    ml="50vw"
                    key={history.id}
                    userIcon={history.userIcon}
                    username={history.username}
                    coin={history.coin}
                    approval={history.approval}
                    time={history.time}
                  />
                ))}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Text
                  pt="2vh"
                  fontSize="24px"
                  fontFamily={'body'}
                  fontWeight="bold"
                  ml="5vw"
                  mt={'3vh'}
                >
                  Register Tasks
                </Text>
                <Register />
              </>
            }
          />
        </Routes>
      </Box>
    </div>
  );
};

export default Top;

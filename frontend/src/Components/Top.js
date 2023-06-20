import { Box, Button, Heading, Text, Center } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ConversationItem from './ConversationItem';
import Receive from './Receive';
import Header from './Header';
import Receipt from './Receipt';
import Register from './register';
import Detail from './Detail';

const Top = () => {
  const [data, setData] = useState('');

  const sendData = async () => {
    try {
      const response = await axios.post('/api/data', {
        data: 'Hello from React',
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const conversations = [
    {
      id: 1,
      userIcon: 'https://avatars.githubusercontent.com/u/72214074?v=4',
      username: 'lenongo',
      message: 'New Create Game using javascript',
      approval: 'Progress',
      time: '2023-06-20 21:40',
    },
    {
      id: 2,
      userIcon: 'https://avatars.githubusercontent.com/u/72214074?v=4',
      username: 'lenongo',
      message: 'Create Game using javascript',
      approval: 'Reject',
      time: '2023-06-20 15:40',
    },
    {
      id: 3,
      userIcon: 'https://avatars.githubusercontent.com/u/81513223?v=4',
      username: 'herring101',
      message: 'A logo was set as the background image.',
      approval: 'Approve',
      time: '2023-06-20 12:31',
    },
    // 他の会話データを追加
  ];
  const history = [
    {
      id: 1,
      userIcon: 'https://avatars.githubusercontent.com/u/72214074?v=4',
      username: 'lenongo',
      coin: '1',
      approval: 'Progress',
      time: '2023-06-20 21:40',
    },
    {
      id: 2,
      userIcon: 'https://avatars.githubusercontent.com/u/72214074?v=4',
      username: 'lenongo',
      coin: '1',
      approval: 'Reject',
      time: '2023-06-20 21:40',
    },
    {
      id: 3,
      userIcon: 'https://avatars.githubusercontent.com/u/81513223?v=4',
      username: 'herring101',
      coin: '5',
      approval: 'Approve',
      time: '2023-06-20 12:31',
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
                <Button onClick={sendData}>Send Data</Button>
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
                  Review
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
            path="/receipt/:id"
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
                  Review of AI
                </Text>
                <Detail />
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

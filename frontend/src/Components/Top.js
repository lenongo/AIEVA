import { Box, Button, Heading } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversationItem from './ConversationItem';
import Receive from './Receive';
import Header from './Header';

const Top = () => {
  const conversations = [
    {
      id: 1,
      userIcon: 'user1.png',
      username: 'John',
      message: 'Hello, how are you?',
    },
    {
      id: 2,
      userIcon: 'user2.png',
      username: 'Jane',
      message: "I'm doing well, thank you!",
    },
    // 他の会話データを追加
  ];
  return (
    <div>
      <Heading mt="2vh" size="2xl">
        History
      </Heading>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {conversations.map(conversation => (
                <ConversationItem
                  ml="50vw"
                  key={conversation.id}
                  userIcon={conversation.userIcon}
                  username={conversation.username}
                  message={conversation.message}
                />
              ))}
            </>
          }
        />
        <Route
          path="/receive"
          element={
            <>
              <Receive />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Top;

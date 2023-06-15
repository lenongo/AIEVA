import { Box, Button } from '@chakra-ui/react';
import ConversationItem from './ConversationItem';

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
      {conversations.map(conversation => (
        <ConversationItem
          ml="50vw"
          key={conversation.id}
          userIcon={conversation.userIcon}
          username={conversation.username}
          message={conversation.message}
        />
      ))}
    </div>
  );
};

export default Top;

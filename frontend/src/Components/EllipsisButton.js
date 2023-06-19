import { Button } from '@chakra-ui/react';

const EllipsisButton = ({ text, ...props }) => {
  const truncatedText = text.length > 20 ? text.slice(0, 17) + '...' : text;

  const walletConnect = async () => {
    props.walletConnect();
  };

  return (
    <Button
      ml={'3vw'}
      {...props}
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
      onClick={walletConnect}
    >
      {truncatedText}
    </Button>
  );
};

export default EllipsisButton;

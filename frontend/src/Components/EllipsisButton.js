import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useState } from 'react';

// Import just a few select items
import { BrowserProvider, parseUnits } from 'ethers';

// Import from a specific export
import { HDNodeWallet } from 'ethers/wallet';

const EllipsisButton = ({ text, ...props }) => {
  const truncatedText = text.length > 20 ? text.slice(0, 17) + '...' : text;

  const walletConnect = async () => {
    props.walletConnect();
  };

  return (
    <Button
      {...props}
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
      onClick={walletConnect}
      ml="70vw"
      mt="1vh"
      maxH="5vh"
    >
      {truncatedText}
    </Button>
  );
};

export default EllipsisButton;

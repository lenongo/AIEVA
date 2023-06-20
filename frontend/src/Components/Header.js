import { Box, Button, Image, Text, Flex } from '@chakra-ui/react';
// Import everything
import { ethers } from 'ethers';
import { useState } from 'react';

// Import just a few select items
import EllipsisButton from './EllipsisButton';
import ai from './daologo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    let signer = null;
    console.log('Wallet Connect');

    let provider;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      console.log('MetaMask not installed; using read-only defaults');
      provider = ethers.getDefaultProvider();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();
      setIsConnected(true);
      console.log('MetaMask installed; using provider', signer.getAddress());
      try {
        const data = await signer.getAddress(); // 非同期関数の呼び出し
        setWalletAddress(data);
        console.log(data); // データを表示または利用する
      } catch (error) {
        console.log(error); // エラーハンドリング
      }
    }
  };

  return (
    <Box color="white" width="100%" height="7vh" pt="2vh">
      <Flex>
        <Image
          position={'relative'}
          top="-30"
          ml="5px"
          src={ai}
          width={'120px'}
          alt="aiEva"
        />
        <Text
          ml="20vw"
          mt={'5px'}
          color="#1B7CB7"
          fontFamily="body"
          fontWeight="bold"
          _hover={{ color: '#000000' }}
        >
          <Link to="/"> Your Team</Link>
        </Text>
        <Text
          ml="5vw"
          mt={'5px'}
          color="#1B7CB7"
          fontFamily="body"
          fontWeight="bold"
          _hover={{ color: '#000000' }}
        >
          <Link to="/register"> Register Task</Link>
        </Text>

        <Text
          ml="5vw"
          mt={'5px'}
          color="#1B7CB7"
          fontFamily="body"
          fontWeight="bold"
          _hover={{ color: '#000000' }}
        >
          <Link to="/receipt">Review</Link>
        </Text>
        <Text
          ml="5vw"
          mt={'5px'}
          color="#1B7CB7"
          fontFamily="body"
          fontWeight="bold"
          _hover={{ color: '#000000' }}
        >
          <Link to="/receive"> Recieve ASTR</Link>
        </Text>

        <EllipsisButton
          walletConnect={walletConnect}
          text={isConnected ? walletAddress : 'Wallet Connect'}
        />
      </Flex>
    </Box>
  );
};

export default Header;

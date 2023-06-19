import { Box, Text, Avatar, Button, Image } from '@chakra-ui/react';
import { useState } from 'react';
import reject from './reject.png';
import approve from './approve.png';
import usdc from './usdc.png';
import abi from './abi.json';
import { ethers, Contract, parseUnits } from 'ethers';

const Receive = ({ userIcon, username, coin }) => {
  console.log('MetaMask not installed; using read-only defaults');
  let provider;
  let signer;

  const sendCrypto = async () => {
    //ASTARの送付
    const contractAddress = '0x9aB358F76831a3Fc47F6b232eB18d16Bd665df0d';
    console.log('sendCrypto');
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
      console.log('provider', 'provider');
      const contract = new Contract(contractAddress, abi, signer);
      console.log('contract', 'create Contract');
      const amount = parseUnits('1.0', 18);
      const tx = await contract.deposit({
        value: amount,
      });
      console.log('tx', tx);
      console.log('Deposit function called successfully!');
    }
  };

  const receiveCrypto = async () => {
    //ASTARの送付
    const contractAddress = '0x9aB358F76831a3Fc47F6b232eB18d16Bd665df0d';
    console.log('sendCrypto');
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
      console.log('provider', 'provider');
      const contract = new Contract(contractAddress, abi, signer);
      console.log('contract', 'create Contract');
      const amount = parseUnits('1.0', 18);
      const tx = await contract.deposit({
        value: amount,
      });
      console.log('tx', tx);
      console.log('Deposit function called successfully!');
    }
  };

  const signWallet = async () => {
    console.log('Wallet Connect');

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

      console.log('MetaMask installed; using provider', signer.getAddress());
      try {
        const signMessage = signer.signMessage(
          'You recieved 100 USDC from DAO Workers'
        );
        signMessage.then(result => {
          sendCrypto();
          console.log(result);
        }); // データを表示または利用する
      } catch (error) {
        console.log(error); // エラーハンドリング
      }
    }
  };

  return (
    <>
      <Box>
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
          <Box position={'relative'} top={'-39'} width="240px">
            <Text fontWeight="bold"> {username}</Text>
          </Box>
          <Image position={'relative'} top={'-39'} src={usdc} mr="2px" />
          <Box position={'relative'} top={'-39'} width="145px">
            <Text color="#000000" fontWeight="bold">
              USDC
            </Text>
          </Box>
          <Box position={'relative'} top={'-39'} width="145px">
            <Text color="#000000" fontWeight="bold">
              {coin}
            </Text>
          </Box>
        </Box>
        <Box position="relative" ml={'720px'} top={'-100'} fontSize="18px">
          <Button
            width="100px"
            borderRadius={'10px'}
            bg={'#1B7CB7'}
            color={'#FFFFFF'}
            _hover={'#000000'}
            onClick={signWallet}
          >
            Sign
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Receive;

import {
  Box,
  Text,
  Avatar,
  Button,
  Image,
  Select,
  Center,
  Input,
} from '@chakra-ui/react';
import reject from './reject.png';
import approve from './approve.png';
import usdc from './usdc.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import abi from './abi.json';
import { ethers, Contract, parseUnits } from 'ethers';

const Register = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  let provider;
  let signer;

  const handleButtonClick = () => {
    navigate('/'); // 遷移先のパスを指定
  };

  const depositCrypto = async () => {
    //ASTARの送付
    const contractAddress = '0x9aB358F76831a3Fc47F6b232eB18d16Bd665df0d';
    console.log('deposit');
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
      const amount = parseUnits(inputValue, 18);
      const tx = await contract
        .deposit({
          value: amount,
        })
        .then(handleButtonClick);
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
          'You create new task which is ' + inputValue + ' ASTAR'
        );
        signMessage.then(result => {
          depositCrypto();
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
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          ⚒Who assign
        </Text>
        <Select
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        >
          <option fontWeight="bold" fontSize="40px" value="option1">
            Shun Funaki
          </option>
          <option fontWeight="bold" value="option2">
            Haruki Nishio
          </option>
          <option fontWeight="bold" value="option3">
            Kakeru Hirayama
          </option>
        </Select>
      </Box>

      <Box>
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          💻Where is your blanch?
        </Text>
        <Input
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        ></Input>
      </Box>
      <Box>
        <Text
          fontSize="2xl"
          borderRadius="16px"
          ml="5vw"
          mt="20px"
          fontWeight="bold"
        >
          💰How much is this job?
        </Text>
        <Input
          display="flex"
          alignItems="center"
          marginBottom="1rem"
          width="840px"
          height="70px"
          borderRadius="16px"
          fontFamily={'heading'}
          ml="5vw"
          mt="3vh"
          size="lg"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
        ></Input>
      </Box>
      <Center display="flex" width="100%" alignItems="center">
        <Button
          width="340px"
          mt="50px"
          height="50px"
          bg={'#1B7CB7'}
          color={'#FFFFFF'}
          _hover={'#000000'}
          onClick={signWallet}
        >
          Create a job!
        </Button>
      </Center>
    </>
  );
};

export default Register;

import { Box, Text, Avatar, Button, Link, Image } from '@chakra-ui/react';
import reject from './reject.png';
import { useNavigate } from 'react-router-dom';
import approve from './approve.png';
import astr from './astr.png';

const Receipt = ({ userIcon, username, coin, approval, time }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/receipt/1');
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
          onClick={handleClick}
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
          <Image
            position={'relative'}
            top={'-39'}
            src={astr}
            height={'30px'}
            mr="2px"
          />
          <Box position={'relative'} top={'-39'} width="145px">
            <Text color="#20A14C" fontWeight="bold">
              ASTR
            </Text>
          </Box>
          <Box position={'relative'} top={'-39'} width="145px">
            <Text color="#20A14C" fontWeight="bold">
              {coin}
            </Text>
          </Box>

          {approval === 'Approve' ? (
            <>
              <Image position={'relative'} top={'-39'} mr="5px" src={approve} />
              <Text
                fontWeight="bold"
                position={'relative'}
                top={'-39'}
                color="#20A14C"
              >
                {approval}
              </Text>
            </>
          ) : approval === 'Reject' ? (
            <>
              <Image position={'relative'} top={'-39'} mr="5px" src={reject} />
              <Text position={'relative'} top={'-39'} color="#E21111">
                {approval}
              </Text>
            </>
          ) : (
            <>
              {' '}
              <Text position={'relative'} top={'-39'} color="#FFFFFFF">
                {approval}
              </Text>
            </>
          )}
        </Box>
        <Box position="relative" ml={'720px'} top={'-59'} fontSize="18px">
          <Text>{time}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Receipt;

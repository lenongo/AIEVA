import { Box, Text, Avatar, Button, Image } from '@chakra-ui/react';
import reject from './reject.png';
import approve from './approve.png';
import usdc from './usdc.png';

const Receipt = ({ userIcon, username, coin, approval, time }) => {
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
            <Text color="#20A14C" fontWeight="bold">
              USDC
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
          ) : (
            <>
              <Image position={'relative'} top={'-39'} mr="5px" src={reject} />
              <Text
                fontWeight="bold"
                position={'relative'}
                top={'-39'}
                color="#E21111"
              >
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

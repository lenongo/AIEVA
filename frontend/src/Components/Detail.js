import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import SplitScreen from './SplitScreen';

const Detail = () => {
  const data = {
    walletAddress: 'None',
    name: 'Githubのusername',
    icon: 'Githubのusericon',
    message: 'プルリク時のメッセージ',
    code: 'プルリクで変更されているコード',
    reply: 'AIからのリプライ内容',
    accuracy: {
      Comprehensiveness: 8,
      CodeQuality: 8,
      Testing: 6,
      Documentation: 6,
      Performance: 9,
      Security: 9,
      ErrorHandling: 7,
      Size: 9,
      Average: 7.75,
    },
    approval: false,
    time: 'Timeスタンプ',
  };
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <SplitScreen
        leftPanel={
          <>
            {' '}
            <Text mt={'15px'} ml="5vw" fontWeight={'bold'} color={'#FFFFFF'}>
              Summary
            </Text>
            <Box
              p={'15px'}
              mt={'15px'}
              width={'400px'}
              ml={'5vw'}
              bgColor={'#FFFFFF'}
              borderRadius={'20px'}
              border="3px solid black"
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>項目</Th>
                    <Th>値</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.entries(data.accuracy).map(([key, value]) => (
                    <Tr key={key}>
                      <Td>{key}</Td>
                      <Td>
                        {typeof value === 'object'
                          ? JSON.stringify(value)
                          : value}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </>
        }
        rightPanel={
          <>
            <Text ml="300px" mt={'15px'} fontWeight={'bold'} color={'#FFFFFF'}>
              AI Review
            </Text>
            <Box display="flex">
              <Box
                display="flex"
                marginBottom="1rem"
                width="640px"
                height="560px"
                borderRadius="16px"
                ml="300px"
                mt="15px"
                bg="rgba(255, 255, 255, 0.5)" // Set the background color with alpha transparency
              >
                <Text p="20px">
                  'Great job on addressing the issue with setting a background
                  image! The code adheres to coding standards and style guides,
                  making it clear and maintainable. However, there are a few
                  areas that could be improved. It would be beneficial to add
                  tests specifically for the changes related to setting the
                  background image and adjust the documentation to reflect the
                  changes made. <br />
                  <br />
                  Additionally, it would be helpful to handle any potential
                  errors that may occur when loading the image file. Overall,
                  the pull request is small and focused, which is great. Keep up
                  the good work!', 'Overall, the pull request addresses the main
                  issue of setting a background image, but there is room for
                  improvement in terms of testing, documentation, and error
                  handling. The suggestion in the comment regarding the choice
                  of image for the background could also be addressed.'
                </Text>
              </Box>
            </Box>
          </>
        }
      />
    </>
  );
};

export default Detail;

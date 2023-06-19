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
      Comprehensiveness: 10,
      'Code Quality': 7,
      Testing: 2,
      Documentation: 4,
      Performance: 8,
      Security: 10,
      'Error Handling': 6,
      'Size of the Pull Request': 7,
      Average: 7.2,
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
                  There are no tests included in the pull request. It would be
                  beneficial to have tests that cover the functionality of
                  setting the background image and ensure that it works as
                  expected. <br /> <br />
                  The pull request is focused on setting the background image,
                  but it also includes some additional changes related to
                  dependency updates. While these changes may be related to the
                  overall improvement of the system, it would have been more
                  focused to separate them into different pull requests.
                  Overall, the pull request addresses the main issue of setting
                  the background image but lacks comprehensive testing and
                  documentation updates.
                  <br />
                  <br /> It would be beneficial to include tests to verify the
                  functionality and provide clear and helpful documentation
                  updates. Additionally, the code could benefit from additional
                  error handling and more comments to improve clarity and
                  maintainability.
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

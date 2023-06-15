import * as React from "react";
import {
  Box,
  Center,
  Image,
  Flex,
  Button,
  Badge,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex>
        <Text>Header</Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Wallet Connect
        </Button>
      </Flex>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </>
  );
};

export default Header;

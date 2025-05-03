import React from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        minWidth="300px"
      >
        <Input placeholder="Enter your email" mb={4} />
        <Input placeholder="Enter password" mb={4} type="password" />
        <Button bg="black" color="white">Submit</Button>
      </Box>
    </Flex>
  );
};

export default Login;

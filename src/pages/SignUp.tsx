import React from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input";

const SignUp = () => {
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

        <Input placeholder="Enter your name" mb={4} />
        <Input placeholder="Enter your email" mb={4} />
        <PasswordInput placeholder="Enter password" mb={4} type="password" />

        <PasswordStrengthMeter value={1}/>
        <PasswordInput placeholder="Confirm password" mb={4} type="password" />
        <Button bg="black" color="white">Submit</Button>
      </Box>
    </Flex>
  );
};

export default SignUp;

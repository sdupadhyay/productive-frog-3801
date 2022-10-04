import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

const User = () => {
  return (
    <Box border="1px solid red" display="flex" marginTop="28px">
      <Image
        border="1px solid red"
        borderRadius="full"
        boxSize="70px"
        src="https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg"
        alt="Dan Abramov"
      />
      <Box>
        <Stack spacing={3}>
          <Text fontSize="sm" color="#48545b">
            Thursday, September 29th
          </Text>
          <Text fontSize="xl" color="#48545b">
            Good morning, Saurabh Kumar!
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default User;

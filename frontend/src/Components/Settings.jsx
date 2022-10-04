import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar1 from "./Sidebar1";

const Settings = () => {
  return (
    <>
      <Sidebar1 />
      <Box p={10} ml={80} mt={10} w="60%">
        <Flex justifyContent="space-between">
          <Heading as="h4" size="md" mt={17}>
            Client Tags
          </Heading>
          <Button colorScheme="whatsapp" size="sm" mr={10} mt={3}>
            New Client Tag
          </Button>
        </Flex>
        <Box
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
          h="auto"
          w="95%"
          mt={10}
        >
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Tag Name</Text>
            <Text as="cite">1 Tag</Text>
          </Flex>
          <hr />
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Lead</Text>
            <Text as="cite">0 Clients</Text>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Heading as="h4" size="md" mt={17}>
            Client Fields
          </Heading>
          <Button colorScheme="whatsapp" size="sm" mr={10} mt={3}>
            Add New Field
          </Button>
        </Flex>
        <Box
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
          h="auto"
          w="95%"
          mt={10}
        >
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Field Name</Text>
            <Text as="cite">3 Fields</Text>
          </Flex>
          <hr />
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Company Title (Pre-filled on documents)</Text>
            <Box>
              <Text as="u">Edit</Text>
              <Text as="u" ml={5} color="red">
                Delete
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Phone Number</Text>
            <Box>
              <Text as="u">Edit</Text>
              <Text as="u" ml={5} color="red">
                Delete
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" p={3}>
            <Text as="cite">Website</Text>
            <Box>
              <Text as="u">Edit</Text>
              <Text as="u" ml={5} color="red">
                Delete
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Center ml={40}>
        <Text as="sub">
          Feature Requests • Help Center • Blog & Resources • Pricing • Privacy
          policy
        </Text>
      </Center>
      <Center ml={40} mt={8}>
        <Text as="sub">Bonsai Apps: • iPhone • MacOS • Android • Chrome</Text>
      </Center>
      <Center ml={40} mt={8}>
        <Text as="sub">
          ©2022 Bonsai Technologies Inc — Payments, banking, and issuing
          services are provided by Stripe Payments Company, Evolve Bank & Trust
          (Member FDIC), and Celtic Bank (Member FDIC), respectively.
        </Text>
      </Center>
    </>
  );
};

export default Settings;

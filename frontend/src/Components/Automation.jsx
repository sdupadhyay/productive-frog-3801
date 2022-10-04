import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Sidebar1 from "./Sidebar1";

const Automation = () => {
  return (
    <>
      <Sidebar1 />
      <Flex
        w="75%"
        justifyContent="center"
        m="auto"
        mt={200}
        mr={30}
        boxShadow=" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      >
        <Image
          src="https://i.postimg.cc/mZd81DpJ/Screenshot-2022-09-28-123438.jpg"
          h="90%"
          w="50%"
        />
        <Box mt={100} textAlign="left">
          <Heading>Workflow Automation</Heading>
          <Text as="abbr">
            Set up custom actions to be performed automatically on your behalf
            -- from sending welcome emails to requesting client intake forms.
          </Text>
          <br />
          <br />
          <Button bg="teal" size="lg" w="40%" h="10%" color="white">
            <Text>See Upgrade Options</Text>
          </Button>
        </Box>
      </Flex>
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
          ©2022 Bonsai Technologies Inc — Payments, banking, and issuing services
          are provided by Stripe Payments Company, Evolve Bank & Trust (Member
          FDIC), and Celtic Bank (Member FDIC), respectively.
        </Text>
      </Center>
    </>
  );
};

export default Automation;

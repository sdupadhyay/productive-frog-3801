import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Flex w="80%" m="auto" mt="130px" justifyContent="space-evenly">
        <Box>
          <Text fontSize="md" fontWeight="600">
            PRODUCT
          </Text>
          <Flex mt="50px" flexDirection="column">
            <Link href="#" color="gray">Proposals</Link>
            <Link href="#" mt="10px" color="gray">Contracts</Link>
            <Link href="#" mt="10px" color="gray">Invoicing</Link>
            <Link href="#" mt="10px" color="gray">Client CRM</Link>
            <Link href="#" mt="10px" color="gray">Time Tracking</Link>
            <Link href="#" mt="10px" color="gray">Fast Tracking</Link>
            <Link href="#" mt="10px" color="gray">Forms</Link>
            <Link href="#" mt="10px" color="gray">Accounting</Link>
            <Link href="#" mt="10px" color="gray">Bonsai Tax</Link>
            <Link href="#" mt="10px" color="gray">Bonsai Cash</Link>
            <Link href="#" mt="40px" color="gray">Pricing</Link>
            <Link href="#" mt="10px" color="gray">Bonsai Reviews</Link>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="600">FREE RESOURCES</Text>
          <Flex mt="50px" flexDirection="column">
            <Link href="#" color="gray">Freelance Resources</Link>
            <Link href="#" mt="10px" color="gray">Freelance Blog by Bonsai</Link>
            <Link href="#" mt="10px" color="gray">How to Write a Contract</Link>
            <Link href="#" mt="10px" color="gray">Online Signature Maker</Link>
            <Link href="#" mt="40px" color="gray">Self-Employed Taxes Hub</Link>
            <Link href="#" mt="10px" color="gray">Self-Employed Tax Calculations</Link>
            <Link href="#" mt="10px" color="gray">Self-Employed Tax Deductions</Link>
          </Flex>
          <Text mt="30px" fontSize="md" fontWeight="600">Templates</Text>
          <Flex flexDirection="column">
            <Link href="#" mt="20px">Invoice Templates</Link>
            <Link href="#" mt="10px">Proposal Templates</Link>
            <Link href="#" mt="10px">Contract Templates</Link>
            <Link href="#" mt="10px">Agreement Templates</Link>
            <Link href="#" mt="10px">Scope of Work Templates</Link>
            <Link href="#" mt="10px">Quote Templates</Link>
            <Link href="#" mt="10px">Credit Note Templates</Link>
            <Link href="#" mt="10px">Estimate Templates</Link>
            <Link href="#" mt="10px" mb="150px">Form Templates</Link>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="600">BONSAI</Text>
          <Flex mt="50px" flexDirection="column">
            <Link href="#" color="gray">About</Link>
            <Link href="#" mt="10px" color="gray">Careers</Link>
            <Link href="#" mt="10px" color="gray">Support</Link>
            <Link href="#" mt="10px" color="gray">LinkedIn</Link>
            <Link href="#" mt="10px" color="gray">Twitter</Link>
            <Link href="#" mt="10px" color="gray">Privacy Policy</Link>
            <Link href="#" mt="10px" color="gray">Legal</Link>
            <Link href="#" mt="30px" color="gray">Affiliates</Link>
            <Link href="#" mt="10px" color="gray">Write for Us</Link>
            <Link href="#" mt="30px" color="gray">Comparisons</Link>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;

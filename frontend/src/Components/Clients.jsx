import {
  Button,
  Flex,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Sidebar1 from "./Sidebar1";
// import { ChevronDownIcon } from "@chakra-ui/icons";

const Clients = () => {
  return (
    <>
      <Sidebar1 />
      <Flex p={20} ml={80} mt={10} justifyContent="space-between">
        <Stack w="10%">
          <Popover>
            <PopoverTrigger>
              <Button>Filters</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <PopoverHeader>STATUS</PopoverHeader>
                <Select>
                  <option value="Active">Active</option>
                  <option value="Archieved">Archieved</option>
                </Select>
              </PopoverBody>
              <PopoverBody>
                <PopoverHeader>TAGS</PopoverHeader>
                <Select>
                  <option value="Select tag">Select tag</option>
                  <option value="Archieved">Lead</option>
                </Select>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
        <HStack spacing="18px">
          <Text as="abbr" Color="green">
            import CSV
          </Text>
          <Button colorScheme="black" variant="outline">
            Client Portal
          </Button>
          <Button colorScheme="whatsapp" variant="solid">
            New Client
          </Button>
        </HStack>
      </Flex>
      <br />
      <TableContainer w="70%" ml={80}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Client</Th>
              <Th>Contact Name</Th>
              <Th>Contact Email</Th>
              <Th>Tags</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Sample Client</Td>
              <Td>Sample Client</Td>
              <Td>sampleclient@hellobonsai.com</Td>
              <Td>-</Td>
              <Menu>
                <MenuButton mt={4}>•••</MenuButton>
                <MenuList>
                  <MenuItem>View Client</MenuItem>
                  <MenuItem>Invite to Client Portal</MenuItem>
                  <MenuItem>Archive chat</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <br />
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

export default Clients;

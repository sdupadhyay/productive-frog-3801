import React from "react";
import { Flex, Box, Image, Button, Link } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const MainNavbar = () => {
  return (
    <Box w="100%" position="fixed" top="0" zIndex="4" backgroundColor="white">
      <Flex
        w="full"
        border={"1px solid white"}
        p="20px"
        justifyContent="center"
        alignItems={"center"}
      >
        <Flex w="75%" justifyContent={"space-between"} alignItems="center">
          <Image
            w="150px"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
            alt="logo"
            _hover={{ cursor: "pointer" }}
          />
          <Flex
            w="70%"
            justifyContent={"space-between"}
            fontSize="md"
            alignItems="center"
          >
            <Flex w="55%" justifyContent="flex-end" alignItems={"center"}>
              <Flex
                alignItems="center"
                ml={"2rem"}
                _hover={{ cursor: "pointer" }}
              >
                Product{" "}
                <BiChevronDown style={{ marginLeft: "5px" }} size={20} />
              </Flex>
              <Flex
                alignItems="center"
                ml={"2.5rem"}
                _hover={{ cursor: "pointer" }}
              >
                Templates
                <BiChevronDown style={{ marginLeft: "5px" }} size={20} />
              </Flex>
              <Box ml={"2.5rem"} _hover={{ cursor: "pointer" }}>
                <Link href="/pricing">Pricing</Link>
              </Box>
              <Box ml={"2.5rem"} _hover={{ cursor: "pointer" }}>
                <Link href="/reviews">Reviews</Link>
              </Box>
            </Flex>
            <Flex w="33%" alignItems={"center"} justifyContent="space-between">
              <Button
                w="100px"
                variant={"outline"}
                _hover={{ color: "white", backgroundColor: "#00b289" }}
                color="#00b289"
                fontSize={"sm"}
                rounded="4px"
              >
                LOG IN
              </Button>
              <Button
                w="140px"
                background={"#00b289"}
                color="white"
                _hover={{ background: "#00b289" }}
                rounded={"4px"}
                fontSize="sm"
                fontWeight="600"
              >
                START FREE
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainNavbar;

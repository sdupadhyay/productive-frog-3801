import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import MainNavbar from "../Components/MainNavbar";
import Homepage1 from "../Components/Homepage1";
import { CgNotes } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import {
  BsFolder2Open,
  BsClipboardCheck,
  BsFileEarmarkDiff,
} from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { TbFileDollar, TbClipboardText } from "react-icons/tb";
import SliderComponent from "../Components/Slider";
import Footer from "../Components/Footer";

const HomePage = () => {
  const icons = [
    CgNotes,
    TiDocumentText,
    BsFolder2Open,
    HiOutlineClock,
    TbFileDollar,
    BsClipboardCheck,
    BsFileEarmarkDiff,
    TbClipboardText,
  ];
  const links = [
    {
      id: 1,
      title: "Proposals",
    },
    {
      id: 2,
      title: "Contracts",
    },
    {
      id: 3,
      title: "Client CRM",
    },
    {
      id: 4,
      title: "Time Tracking",
    },
    {
      id: 5,
      title: "Invoices",
    },
    {
      id: 6,
      title: "Task Tracking",
    },
    {
      id: 7,
      title: "Accounting & Taxes",
    },
    {
      id: 8,
      title: "Forms",
    },
  ];
  return (
    <div>
      <MainNavbar />
      <Homepage1 />
      <Box>
        <Text
          align="center"
          fontFamily="Domino"
          fontSize="3xl"
          mt="50px"
          mb="20px"
        >
          Make more, manage less
        </Text>
        <Text align="center" fontSize="xl" fontWeight="300" lineHeight="30px">
          Bonsai integrates and automates every step of your business so it{" "}
          <br /> run seamlessly - from proposal to tax season
        </Text>
      </Box>
      <Flex justifyContent="space-between" w="1000px" m="auto" mt="40px">
        <Box w="500px" textAlign="center">
          <Text mb="40px" fontWeight="bold" fontSize="xl">
            Without Bonsai
          </Text>
          <Image
            w="400px"
            m="auto"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
            alt="without bonsai"
          />
        </Box>
        <Box w="500px" textAlign="center" fontSize="xl">
          <Text mb="40px" fontWeight="bold">
            With Bonsai
          </Text>
          <Image
            w="400px"
            m="auto"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg"
            alt="with bonsai"
          />
        </Box>
      </Flex>
      <Box mt="100px">
        {links.map(({ id, title }, index) => {
          const Icon = icons[index];
          return (
            <Box key={id} w="300px" ml="13rem">
              <Flex alignItems="center" mt="20px" border="1px solid" h="50px">
                <Icon
                  size={20}
                  style={{ marginRight: "15px", marginLeft: "20px" }}
                />
                <Text textAlign="left" fontSize="2xl">
                  {title}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
      <Box mt="100px">
        <Text
          align="center"
          fontFamily="Domino"
          fontSize="3xl"
          lineHeight="50px"
          mt="50px"
          mb="20px"
        >
          Trusted by 500K+ self-employed workers <br />
          and small businesses
        </Text>
        <Text align="center" fontSize="xl" fontWeight="300" lineHeight="25px">
          Whether you are just getting started or your business is <br />
          booming, Bonsai has you covered.
        </Text>
      </Box>
      <Flex w="700px" justifyContent="space-between" m="auto" mt="80px">
        <Box>
          <Image
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
            alt="section"
          />
          <Text fontSize="xl" fontWeight="bold" mt="30px">
            Built for All Work Types
          </Text>
          <Text mt="20px" color="gray">
            We proudly back people with wide- <br />
            ranging businesses-from design and <br /> marketing to development,
            writing, and <br /> photography.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
            alt="section"
          />
          <Text fontSize="xl" fontWeight="bold" mt="30px">
            Built for Global Businesses
          </Text>
          <Text mt="20px" color="gray">
            Bonsai has international coverage <br /> across the United States,
            Canada, UK, <br /> Australia and more, with 180 currencies <br />
            supported.
          </Text>
        </Box>
      </Flex>
      <Box mt="100px">
        <Text fontSize="34px" fontFamily="Domino" textAlign="center">
          Don't just take it from us.
        </Text>
      </Box>
      <Box mt="50px">
        <SliderComponent />
      </Box>
      <Flex
        w="62%"
        h="200px"
        backgroundColor="#F2FAFF"
        rounded="lg"
        alignItems="center"
        justifyContent="space-around"
        m="auto"
        mt="150px"
      >
        <Box>
          <Text fontSize="45px" fontFamily="Domino" lineHeight="55px">
            It's <span style={{ color: "#01B289" }}>your</span> business.{" "}
            <br /> We're here to help it grow.
          </Text>
        </Box>
        <Button
          w="130px"
          h="45px"
          background={"#00b289"}
          color="white"
          _hover={{ background: "#00b289" }}
          rounded={"4px"}
          fontSize="sm"
          fontWeight="400"
        >
          START FREE
        </Button>
      </Flex>
      <Footer />
    </div>
  );
};

export default HomePage;

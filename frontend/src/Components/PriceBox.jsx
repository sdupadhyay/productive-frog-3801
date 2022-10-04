import {
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const PriceBox = (ele) => {
  const { Heading, Description, Price, p1, p2, p3, p4, p5, p6, p7, p8, p9 } =
    ele.ele;
  return (
    <div className="spricebox1">
      <div
        style={{
          paddingTop: "50px",
          marginLeft: "30px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Text fontWeight="500" fontSize="1.8rem">
          {Heading}
        </Text>
      </div>
      <div style={{ marginLeft: "35px" }}>
        <Text w="250px" fontSize="15px" textAlign="left">
          {Description}
        </Text>
      </div>
      <HStack style={{ marginLeft: "35px" }}>
        <Text fontSize="3xl" fontWeight="400">
          $
        </Text>
        <Text fontSize="5xl" fontWeight="700">
          {Price}
        </Text>
        <Text fontSize="3xl" color="black">
          /MONTH
        </Text>
      </HStack>
      <Box w="250px" h="2.2px" bg="green" marginLeft="50px"></Box>
      <div style={{ marginTop: "35px", marginLeft: "55px" }}>
        <List spacing={5} textAlign="start">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p1}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p2}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p3}
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p4}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p5}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p6}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p7}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p8}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {p9}
          </ListItem>
        </List>
      </div>
      <div style={{ marginTop: "80px", marginLeft: "30px" }}>
        <Button color="white" w="300px" h="60px" backgroundColor="#00b289">
          START FREE
        </Button>
      </div>
    </div>
  );
};

export default PriceBox;

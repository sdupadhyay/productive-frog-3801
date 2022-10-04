import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar1 from "../Components/Sidebar1";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <Sidebar1 />
      <div id="sp1">
        <Box
          h="90px"
          w="80%"
          margin="auto"
          marginTop="7"
          borderRadius="3px"
          bg="#f2faff"
          padding={5}
          borderColor="#f2faff"
          border="1px solid lightblue"
        >
          <Flex gap="5">
            <InfoIcon color="#3a88c2" mt="1.5"></InfoIcon>
            <Box>
              <Text textAlign="left" color="#3a88c2">
                {" "}
                Start 7 Day Free Trial
              </Text>
              <Text textAlign="left">
                {" "}
                You currently don’t have an active subscription.
                <label style={{ color: "#3a88c2" }}>
                  Start your Free Trial now!
                </label>
              </Text>
            </Box>
          </Flex>
        </Box>
        <div id="sp2">
          <div id="sp21">
            <img src="https://i.ibb.co/MshZrjt/project.jpg" />
          </div>
          <div id="sp22">
            <Box mt="150px" ml="-270px">
              <Heading color="#292a2d" fontSize="20px">
                Organize Your Projects
              </Heading>
            </Box>
            <Box mt="15px">
              <Text textAlign="left" color="#6d6d6d" fontStyle="13px">
                Projects are used to organize all your ongoing work. <br />{" "}
                Within a project, you can send a proposal, contract, <br /> and
                as many invoices as you need.
              </Text>
            </Box>
            <Box mt="25px" ml="-330px">
              <Button colorScheme="green">Create a Project</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

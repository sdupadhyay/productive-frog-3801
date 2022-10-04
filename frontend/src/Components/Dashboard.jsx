import React from "react";
import { Box } from "@chakra-ui/react";
import Timer from "./DashCompo/Timer";
import User from "./DashCompo/User";
import Project from "./DashCompo/Project";
import Timeline from "./DashCompo/Timeline";
import Income from "./DashCompo/Income";
import Footer from "./DashCompo/Footer";

const Dashboard = () => {
  return (
    <Box display="flex">
      <Box width="16%" border="1px solid red">
        sidebar
      </Box>
      <Box width="84%" border="1px solid red" marginLeft="10px">
        <Timer />
        <User />
        <br />
        <Project />
        <br />
        <Timeline />
        <br />
        <Income />
        <br />
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;

import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { React, useState } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Link, Route, Routes } from "react-router-dom";
import ProjOne from "../DashRoute/ProjOne";
import AddOne from "../DashRoute/AddOne";
import BrandOne from "../DashRoute/BrandOne";
import CalOne from "../DashRoute/CalOne";
import BankOne from "../DashRoute/BankOne";


const Project = () => {
    
  return (
    <Box
      border="1px solid grey" display="flex" padding="20px" borderRadius="6px" height="250px"
    >
      <Box width='25%' border='1px solid white'  padding="5px" >
        <Link to="/" >
          <p style={{fontSize:"12px", padding:"5px" , backgroundColor:"#e6f8f3"}}>1. Create your first Project</p>
        </Link>
        <Link to="/company" >
          <p style={{fontSize:"12px", padding:"5px" , backgroundColor:"#e6f8f3"}}>2. Add company details</p>
        </Link>
        <Link to="/branding">
          <p style={{fontSize:"12px", padding:"5px", backgroundColor:"#e6f8f3"}}>3. Setup your branding</p>
        </Link>
        <Link to="/calander">
          <p style={{fontSize:"12px", padding:"5px" , backgroundColor:"#e6f8f3"}}>4.Connect your calendar</p>
        </Link>
        <Link to="/bank">
          <p style={{fontSize:"12px", padding:"5px" , backgroundColor:"#e6f8f3"}}>5. Connect a bank account</p>
        </Link>
      
      </Box>
      <vr/>
      <Box marginLeft="2%" width="65%"  backgroundColor="#f1fbf8" padding="10px">
        <Routes>
          <Route path="/" element={ <ProjOne/> } />
          <Route path="/company" element={ <AddOne/> } />
          <Route path="/branding" element={ <BrandOne/> } />
          <Route path="/calander" element={ <CalOne/> } />
          <Route path="/bank" element={<BankOne/> }/>
        </Routes>
      </Box>
    </Box>
  );
};

export default Project;

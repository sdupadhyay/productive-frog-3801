import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const Faq = ({ Heading, Description }) => {
  return (
    <AccordionItem borderColor="white">
      <h2>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            fontWeight="bold"
            fontSize="22px"
            fontFamily="'Amerigo-bt roman opt',sans-serif"
            color="#4C525A"
            _hover={{
              color: "#00B289",
            }}
          >
            {Heading}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} textAlign="left">
        {Description}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Faq;

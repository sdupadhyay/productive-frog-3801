import { Box, Heading, Image, Text , Button, useDisclosure, Input} from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Select
  } from '@chakra-ui/react'

const ProjOne = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box backgroundColor="#f1fbf8">
       <Image src='https://app.hellobonsai.com/assets/dashboard/project_icon-cab4656b287c33bbf7cf081d205ac0698acc6ec5608a40d3ca388df1549ad089.svg' />
        <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Create your first Project</Heading>
       <Text fontSize='12px' color='#4d4d4e'>
          Projects allow you to organize all of the tasks related to a specific initiative, goal, or big <br/> piece and track progress.
       </Text> 
       <br/>
         <Button onClick={onOpen} colorScheme='green' size='sm' width="110px" height="17px">
            <Text fontSize='10px' color='whilte'> Create a Project  </Text>
        </Button>

        {/* model body */}

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader justifyContent="center">
          <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Create New Project</Heading>
            </ModalHeader>
            <hr/>
          <ModalCloseButton />
          <ModalBody>
            <Box>
                <label style={{color:"gray", fontSize:"12px"}}>CLIENT</label>
                <Input placeholder='Select..' value="" />
                <label style={{color:"gray", fontSize:"12px"}}>PROJECT NAME</label>
                <Input placeholder='Homepage Redesign' value="" />
                <label style={{color:"gray", fontSize:"12px"}}>CURRENCY</label>
                 <Select color="gray" fontSize="12px" placeholder='INR'>
                    <option value='option1'>INR</option>
                    <option value='option2'>HKD</option>
                    <option value='option3'>USD</option>
                    <option value='option2'>EUR</option>
                    <option value='option3'>YEN</option>
                </Select>
            </Box>
          </ModalBody>

          <ModalFooter>
              <Button variant='ghost' onClick={onClose}>Create Project</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProjOne

import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,   SearchIcon } from '@chakra-ui/icons'
import {BsFillPlayCircleFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

const Timer = () => {
  
  return (
    <Box height="50px" display="flex" border="1px solid gray">

        <Box display="flex" margin="15px 15px" height="25px" >
             <SearchIcon w={3} h={3}   />
            <Box paddingLeft={6} fontSize={10}>Search</Box>
        </Box>
        <Box display="flex"  marginTop="15px" marginLeft="50%" height="25px" alignContent='flex-end'>
                 <Button colorScheme='green' marginRight="15px" size='xs'>Start Free trial  </Button>            
                <BsFillPlayCircleFill />
                <Box paddingLeft={6} fontSize={10}>Start Timer</Box>
                <Box paddingLeft={6} >
                       <CgProfile paddingLeft="10px"/>
                </Box>

        </Box>

    </Box>
  )
}

export default Timer

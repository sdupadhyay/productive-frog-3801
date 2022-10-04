import { Box , Button, Heading, Text} from '@chakra-ui/react'
import React from 'react'

const Timeline = () => {
  return (
    <Box border="1px solid grey" display="flex" padding="0px" borderRadius="6px" height="200px">
      <Box border="0.5px solid gray" width="94%" >
        <Heading as='h6' size='xs' fontSize="10px" padding="18px" >
                Project Timeline
       </Heading>
       <hr/>
       <Box justifyContent="center" alignItems="center">
        <Text fontSize="12px" >No current activity in time frame.</Text>
       </Box>
      </Box>

      <Box marginLeft="30px" marginTop="20px" width="25%">
        <Button border="1px solid grey" margin="8px">
           <Box padding="7px" borderRadius="6px" height="42px" width="150px">
            <Text fontSize="10px" >Draft a proposal</Text>
           </Box>
         </Button>
         <Button border="1px solid grey" margin="8px">
             <Box   padding="7px" borderRadius="6px" height="42px" width="150px">
                 <Text fontSize="10px" >Create a contract</Text>
              </Box>
         </Button>

         <Button border="1px solid grey" margin="8px">
            <Box   padding="7px" borderRadius="6px" height="42px" width="150px">
              <Text fontSize="10px" >Send an invoice</Text>
             </Box>
         </Button>
        
      </Box>

    </Box>
  )
}

export default Timeline

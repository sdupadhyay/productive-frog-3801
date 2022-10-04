import { Box , Button, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

const Income = () => {
  return (
    <Box border="1px solid grey" display="flex" padding="0px" borderRadius="6px" height="200px">
      <Box border="0.5px solid gray" width="80%" >
        <Heading as='h6' size='xs' fontSize="10px" padding="18px" >
                Income & Expenses
       </Heading>
       <hr/>
       <Box>
         <Box justifyContent="center" alignItems="center" display="flex" gap="35px">
             <Text fontSize="9px" >APR</Text>
             <Text fontSize="9px" >MAY</Text>
               <Text fontSize="9px" >JUN</Text>
              <Text fontSize="9px" >JUL</Text>
             <Text fontSize="9px" >AUG</Text>
            <Text fontSize="9px" >SEP</Text>
            <Text fontSize="9px" >OCT</Text>
         </Box>
       </Box>
       <Slider aria-label='slider-ex-1' defaultValue={30} marginTop="50px">
          <SliderTrack>
         <SliderFilledTrack />
         </SliderTrack>
         <SliderThumb />
        </Slider>

        <Box justifyContent="center" alignItems="center" display="flex" gap="35px" marginTop="40px">
             <Text fontSize="9px" >Outstanding</Text>
             <Text fontSize="9px" >Overdue </Text>
               <Text fontSize="9px" >Paid & Pending</Text>
              <Text fontSize="9px" >Other Income</Text>
             
         </Box>
      
      </Box>
     

      <Box marginLeft="30px" marginTop="20px" width="27%">
        <Box  margin="8px">
           <Box padding="7px" borderRadius="6px" height="42px" width="150px">
            <Text fontSize="10px" >Activity</Text>
           </Box>           
         </Box>
         <hr/>
         <Text fontSize="10px" >No activity yet</Text>
        
        
      </Box>
      

    </Box>
  )
}

export default Income

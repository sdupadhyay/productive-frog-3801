import React from 'react'
import { Box, Heading, Image, Text , Button} from '@chakra-ui/react'

const CalOne = () => {
  return (
    <Box backgroundColor="#f1fbf8">
    <Image src='https://app.hellobonsai.com/assets/dashboard/calendar-c96cbc69df614b169680d80d37aa572a7189f2ec778534428010f4f537ede8f8.svg' />
     <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Connect your calendar</Heading>
    <Text fontSize='12px' color='#4d4d4e'>
    Connect your Google Calendar account to receive automated reminders for upcoming <br/> invoices and tasks.

    </Text> 
    <br/>
      <Button colorScheme='green' size='sm' width="110px" height="17px">
         <Text fontSize='10px' color='whilte'> Connect Calendar  </Text>
     </Button>
 </Box>
  )
}

export default CalOne

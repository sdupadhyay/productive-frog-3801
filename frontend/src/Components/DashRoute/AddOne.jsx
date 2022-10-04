import React from 'react'
import { Box, Heading, Image, Text , Button} from '@chakra-ui/react'

const AddOne = () => {
  return (
    <Box backgroundColor="#f1fbf8">
    <Image src='https://app.hellobonsai.com/assets/dashboard/details-ddd6affca47f2f9bf95d730b041f7d8ba662d38d7745e87946e61872e84e4d25.svg' />
     <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Add company details</Heading>
    <Text fontSize='12px' color='#4d4d4e'>
    Add your basic info, logo, and branding. They'll be automatically added to your future <br/> proposals and invoices.
    </Text> 
    <br/>
      <Button colorScheme='green' size='sm' width="110px" height="17px">
         <Text fontSize='10px' color='whilte'> Add Details  </Text>
     </Button>
 </Box>
  )
}

export default AddOne

import React from 'react'
import { Box, Heading, Image, Text , Button} from '@chakra-ui/react'

const BrandOne = () => {
  return (
    <Box backgroundColor="#f1fbf8">
    <Image src='https://app.hellobonsai.com/assets/dashboard/branding-9b80aa981d81868397c3e7f3a3bf9e24197565b6a262b3d361970610ea5975e1.svg' />
     <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Setup your branding</Heading>
    <Text fontSize='12px' color='#4d4d4e'>
    Customize how your brand appears to your clients across your invoices, contracts and <br/> proposals.
    </Text> 
    <br/>
      <Button colorScheme='green' size='sm' width="110px" height="17px">
         <Text fontSize='10px' color='whilte'> Setup Your Brand  </Text>
     </Button>
 </Box>
  )
}

export default BrandOne

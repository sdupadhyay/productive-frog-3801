import React from 'react'
import { Box, Heading, Image, Text , Button} from '@chakra-ui/react'

const BankOne = () => {
  return (
    <Box backgroundColor="#f1fbf8">
    <Image src='https://app.hellobonsai.com/assets/dashboard/bank-d258fd80e095b4620892055ecec103baa6638a49e4a0519f1ab4df307d7b700a.svg' />
     <Heading as='h6' size='xs' fontFamily="serif" lineHeight="26px">Connect a bank account</Heading>
    <Text fontSize='12px' color='#4d4d4e'>
    Connect your bank accounts to automate your expense tracking and management.
    </Text> 
    <br/>
      <Button colorScheme='green' size='sm' width="110px" height="17px">
         <Text fontSize='10px' color='whilte'> Connect Account</Text>
     </Button>
 </Box>
  )
}

export default BankOne

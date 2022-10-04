import React from 'react'
import { Box, Button ,Image, Stack, Text} from '@chakra-ui/react'
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames =["Sunday", "Monday", "Tuesday", "wednesday","Thrusday", "Friday","Saturday"] 

const User = () => {
  const current = new Date();
  const month = monthNames[current.getMonth()]
  const day = current.getDate()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <Box  display='flex' marginTop='28px'>
             <Image   borderRadius='full'  boxSize='70px'  src='https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg'  alt='Dan Abramov'/>
             <Box>
             <Stack spacing={3}>  
                  {/* <Text fontSize='sm' color='#48545b'>{date}</Text>
                  <Text fontSize='sm' color='#48545b'>{day}</Text>
                  <Text fontSize='sm' color='#48545b'>{month}</Text> */}
                   <Text fontSize='sm' color='#48545b'>Thursday, {month}, {day}</Text>
                   <Text fontSize='xl' color='#48545b'>Good morning, Saurabh Kumar!</Text>
             </Stack>
             </Box>
    </Box>
  )
}

export default User

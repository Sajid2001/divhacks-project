import React from 'react'
import { Box, Spacer} from '@chakra-ui/react'

export default function TopBar({heading}) {
  return (
    <Box textColor={'white'} display={'flex'} fontSize={'5xl'} justifyItems={'space-between'} p='20' bg='blue.400'>
        <Spacer/>
            {heading}  
        <Spacer/>
    </Box>
  )
}

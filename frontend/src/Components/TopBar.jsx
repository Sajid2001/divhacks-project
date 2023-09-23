import React from 'react'
import { Box, Spacer} from '@chakra-ui/react'

export default function TopBar({heading}) {
  return (
    <Box textColor={'white'} display={'flex'} fontSize={'3xl'} justifyItems={'space-between'} margin={'12'} p='4' bg='blue.400'>
        <Spacer/>
            {heading}  
        <Spacer/>
    </Box>
  )
}

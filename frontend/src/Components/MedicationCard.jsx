import React from 'react'
import { Card, Stack, Heading, Divider, Link, Button, Image, Text, CardBody, CardFooter, HStack, Spacer } from '@chakra-ui/react'


export default function MedicationCard() {
  return (
    <div>
        <Card maxW='md'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Medicine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading textAlign={'center'} size='xl'>Drug One</Heading>
      <Text>
        This is a real drug. One of the medicine of all time
      </Text>
      <HStack>
        <Text color='blue.600' fontSize='2xl'>
          <strike>Retail Price: $450</strike>
        </Text>
        <Spacer/>
        <Text color='blue.600' fontSize='2xl'>
        Our Price: $420
        </Text>
      </HStack>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>

      <Button width={'full'} variant='solid' colorScheme='blue'>
        <Link href='/medication/1'>
        Buy now!
        </Link>
      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

import React from 'react'
import { Card, Stack, Heading, Divider, Link, Button, Image, Text, CardBody, CardFooter, HStack, Spacer } from '@chakra-ui/react'


export default function MedicationCard({medicine}) {
  return (
    <div>
        <Card maxW='md'>
  <CardBody>
    <Image
      src={medicine.imageUrl}
      alt='Medicine'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading textAlign={'center'} size='xl'>{medicine.name}</Heading>
      <Text>
        {medicine.description}
      </Text>
      <HStack>
        <Text color='blue.600' fontSize='2xl'>
          <strike>Retail Price: {medicine.retailPrice}</strike>
        </Text>
        <Spacer/>
        <Text color='blue.600' fontSize='2xl'>
        Our Price: {medicine.ourPrice}
        </Text>
      </HStack>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>

      <Button width={'full'} variant='solid' colorScheme='blue'>
        <Link href={`/medication/${medicine._id}`}>
        Buy now!
        </Link>
      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

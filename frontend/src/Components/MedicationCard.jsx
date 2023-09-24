import React from 'react'
import { Card, Stack, Heading, Divider, Link, Button, Image, Text, CardBody, CardFooter, HStack, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


export default function MedicationCard({medicine}) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/medication/${medicine._id}`)
  }
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
      <HStack>
        <Text color='blue.600' fontSize='2xl'>
          <strike>Retail Price: ${medicine.retailPrice}</strike>
        </Text>
        <Spacer/>
        <Text color='blue.600' fontSize='2xl'>
        Our Price: ${medicine.ourPrice}
        </Text>
      </HStack>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>

      <Button onClick={handleNavigate} width={'full'} variant='solid' colorScheme='blue'>
        View
      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

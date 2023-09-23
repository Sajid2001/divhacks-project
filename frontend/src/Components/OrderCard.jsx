import { Card, Image, Stack, CardBody, Heading, CardFooter, Text } from '@chakra-ui/react'
import React from 'react'


export default function OrderCard({order}) {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  minW={'2xl'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={order.imageUrl}
    alt='Drugs'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{order.name}</Heading>

      <Text py='2'>
        {order.description}
      </Text>
      <Text py='2'>
        {order.price}
      </Text>
      <Text py='2'>
        {order.form}
      </Text>
    </CardBody>

    <CardFooter>
        Ordered: today
    </CardFooter>
  </Stack>
</Card>
  )
}

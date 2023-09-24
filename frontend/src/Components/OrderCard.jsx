import { Card, Image, Stack, CardBody, Heading, CardFooter, Text } from '@chakra-ui/react'
import React from 'react'


export default function OrderCard({order}) {

  const timestamp = new Date(order.dateOrdered);

  const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
  const day = timestamp.getDate().toString().padStart(2, '0');
  const year = timestamp.getFullYear();

  const formattedDate = `${month}-${day}-${year}`;

  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  minW={'2xl'}
>
  <Image
    padding={'8px'}
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={order.imageUrl}
    alt='Drugs'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{order.name}</Heading>

      <Text py='2'>
        Price: {order.price}
      </Text>
      <Text py='2'>
        Form: {order.form}
      </Text>
      <Text py='2'>
        Quantity: {order.amount}
      </Text>
    </CardBody>

    <CardFooter>
        Ordered: {formattedDate}
    </CardFooter>
  </Stack>
</Card>
  )
}

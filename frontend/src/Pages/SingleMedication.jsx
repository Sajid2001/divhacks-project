import React from 'react'
import { Input, Text, Button, Card, Select, CardBody, Spacer, CardFooter,Stack, HStack, Divider, Image, Heading, Box } from '@chakra-ui/react'

export default function SingleMedication() {
  return (
    <div>

      <Box display={'flex'} marginY={'20'} justifyContent={'center'}>  
    <Card maxW='lg'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </Text>
            <HStack>
                <Text color='blue.600' fontSize='2xl'>
                    Retail Price: <strike>$450</strike>
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
        <Box>
            <Card maxW={'md'}>
                <Heading textAlign={'center'} paddingX={'20'} paddingY={'5'}>Payment Information</Heading>
                <CardBody>
                    <Stack gap={3}>
                        <Input placeholder='Credit Card' />
                        <Input placeholder='Name on Card' />
                        <Input placeholder='Address' />
                        <Select placeholder='Select quantity'>
                            <option value='option1'>1</option>
                            <option value='option2'>2</option>
                            <option value='option3'>3</option>
                        </Select>
                    </Stack>
                </CardBody>
                <CardFooter>
                <Button width={'full'} variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                </CardFooter>
            </Card>
          </Box>
  </CardFooter>
</Card>
</Box>

    

        
        
        
    </div> 
  )
}
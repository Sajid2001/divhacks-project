import React from 'react'

import {
    Box,
    Link,
    Heading,
    Container,
    Text,
    Button,
    Stack,
  } from '@chakra-ui/react'

export default function Featured() {
  return (
    <>
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Save money on <br />
          <Text as={'span'} color={'blue.400'}>
            your medication
          </Text>
        </Heading>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Button
            colorScheme={'blue'}
            bg={'blue.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}>
                <Link href='/medications'>
                    Get Started
                </Link>
          </Button>
          <Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </>
  )
}



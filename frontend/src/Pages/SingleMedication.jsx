import React, { useEffect, useState } from 'react'
import { Input, Text, Button, Card, Select, CardBody, Spacer, CardFooter,Stack, HStack, Divider, Image, Heading, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import PaymentForm from '../Components/PaymentForm';

export default function SingleMedication() {
    const [medication, setMedication] = useState(null);

    const {id} = useParams()

    const getMedication = async() => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
        const json = await response.json()
        console.log(json);

        if (response.ok){
            console.log(json);
            setMedication(json);
        }
    }

    useEffect(() => {
        getMedication();
    },[])

  return (
    <div>
        {medication &&
      <Box display={'flex'} marginY={'20'} justifyContent={'center'}>  
            <Card maxW='lg'>
                <CardBody>
                    <Image
                    src={medication.imageUrl}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading textAlign={'center'} size='lg'>{medication.name}</Heading>
                    <Text textAlign={'center'}>
                        {medication.description}
                    </Text>
                    <HStack>
                        <Text color='blue.600' fontSize='2xl'>
                        <strike>Retail Price: {medication.retailPrice}</strike>
                        </Text>
                        <Spacer/>
                        <Text color='blue.600' fontSize='2xl'>
                        Our Price: {medication.ourPrice}
                        </Text>
                    </HStack>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <PaymentForm medication = {medication}/>
                </CardFooter>
            </Card>
        </Box>
        }

        
        
        
    </div> 
  )
}
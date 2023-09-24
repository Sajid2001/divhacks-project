import React, {useState} from 'react'
import { Input, Button, Card, Select, CardBody, CardFooter,Stack, Heading, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


export default function PaymentForm({medication}) {

    const [amount, setAmount] = useState(0);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newOrder = {
            name:medication.name, 
            price:medication.ourPrice, 
            form:medication.form, 
            amount:amount, 
            imageUrl:medication.imageUrl
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
              'Content-Type': 'application/json',
          }
        })
        const json = await response.json()
      
          if (response.ok) {
            navigate('/orders')
            setCardNumber('')
            setCardName('')
          }
    }

  return (
    <div>
        <Box>
            <Card maxW={'md'}>
                <Heading textAlign={'center'} paddingX={'20'} paddingY={'5'}>Payment Information</Heading>
                <CardBody>
                    <Stack gap={3}>
                        <Input onChange={(e) => {setCardNumber(e.target.value)}} placeholder='Credit Card' />
                        <Input onChange={(e) => {setCardName(e.target.value)}} placeholder='Name on Card' />
                        <Input onChange={(e) => {setAddress(e.target.value)}} placeholder='Address' />
                        <Select onChange={(e) => {setAmount(e.target.value)}} placeholder='Select quantity'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </Select>
                    </Stack>
                </CardBody>
                <CardFooter>
                <Button onClick={handleSubmit} width={'full'} variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                </CardFooter>
            </Card>
        </Box>
    </div>
  )
}

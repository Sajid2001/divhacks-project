import { Box, Link, Spacer, Flex } from '@chakra-ui/react'
import MedicationGrid from '../Components/MedicationGrid';
import OurGoal from '../Components/OurGoal';
import { useEffect, useState } from 'react';
const Home = () => {
    const [featured, setFeatured] = useState([]);

    const getFeatured = async() => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/featured`)
        const json = await response.json()
        console.log(json);

        if (response.ok){
            console.log(json);
            setFeatured(json);
        }
    }
    useEffect(() => {
        getFeatured();
    },[])
    return (  
        <div>
            <Box borderRadius={'xl'} display={'flex'} fontSize={'3xl'} justifyItems={'space-between'} margin={'12'} p='4' bg='blue.400'>
            <Spacer/>
                <Link href='/' textColor={'white'}> Home </Link>
                <Spacer/>
                <Link href='/medications'  textColor={'white'}> Medications </Link>
                <Spacer/>
                <Link href='/orders' textColor={'white'}> Orders </Link>
                <Spacer/>
            </Box>
            {featured && <MedicationGrid medications = {featured}/>}
           
           <OurGoal/>
        </div>
    );
}
 
export default Home;
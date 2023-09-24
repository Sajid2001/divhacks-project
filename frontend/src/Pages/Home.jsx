import { Box, Link, Spacer, Flex } from '@chakra-ui/react'
import MedicationGrid from '../Components/MedicationGrid';
import OurGoal from '../Components/OurGoal';
import { useEffect, useState } from 'react';
import Featured from '../Components/Featured';
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
            <Featured/>
            {featured && <MedicationGrid medications = {featured}/>}
            <OurGoal/>
            
           
        </div>
    );
}
 
export default Home;
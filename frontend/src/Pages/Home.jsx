import { Box, Grid, GridItem, Text, Link, Spacer, Flex } from '@chakra-ui/react'
import MedicationGrid from '../Components/MedicationGrid';
import OurGoal from '../Components/OurGoal';
const Home = () => {
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
           <MedicationGrid/>
           <OurGoal/>
        </div>
    );
}
 
export default Home;
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
const Home = () => {
    return (  
        <div>
            <Box mx="auto">
            <Grid
            h='300px'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
            margin={4}
            >
                <GridItem  rowSpan={3} colSpan={1} bg='#F1FAEE'><Text> We are Fast </Text></GridItem>
                <GridItem rowSpan={1} colSpan={1} bg='#E63946' ><Text> Tablets </Text></GridItem>
                <GridItem rowSpan={1} colSpan={1} bg='#E63946' ><Text> We are Fast </Text></GridItem>
                <GridItem  rowSpan={1} colSpan={1} bg='#E63946' ><Text> We are Fast </Text></GridItem>

            </Grid>
            </Box>
        </div>
    );
}
 
export default Home;
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import MedicationCard from './MedicationCard'

export default function MedicationGrid() {
  return (
    <div>
        <Grid margin={'20px'} templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem>
            <MedicationCard/>
        </GridItem>
        <GridItem>
            <MedicationCard/>
        </GridItem> 
        <GridItem>
            <MedicationCard/>
        </GridItem>
        </Grid>
    </div>
  )
}

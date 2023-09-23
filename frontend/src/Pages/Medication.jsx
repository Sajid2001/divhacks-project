import MedicationGrid from "../Components/MedicationGrid";
import { Box, Spacer, Link} from  '@chakra-ui/react'
import TopBar from "../Components/TopBar";


const Medications = () => {
    return ( 
    <div>
        <TopBar heading={'Medication'}/>
        <MedicationGrid/>
    </div> 
    );
}
 
export default Medications;
import MedicationGrid from "../Components/MedicationGrid";
import { Box, Spacer, Link} from  '@chakra-ui/react'
import TopBar from "../Components/TopBar";
import { useState, useEffect } from "react";


const Medications = () => {

    const [medications, setMedications] = useState([]);

    const getMedication = async() => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
        const json = await response.json()
        console.log(json);

        if (response.ok){
            console.log(json);
            setMedications(json);
        }
    }
    useEffect(() => {
        getMedication();
    },[])

    return ( 
    <div>
        <TopBar heading={'Medication'}/>
        {medications &&<MedicationGrid medications={medications}/>}
    </div> 
    );
}
 
export default Medications;
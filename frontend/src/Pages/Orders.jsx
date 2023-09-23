import { Stack } from "@chakra-ui/react";
import TopBar from "../Components/TopBar";
import OrderCard from "../Components/OrderCard";

const Orders = () => {
    return (  
        <div>
            <TopBar heading={'Orders'}/>

            <Stack justify={'center'} align={'center'} gap={3} marginY={4}>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </Stack>
        </div>
    );
}
 
export default Orders;
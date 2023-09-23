import { Stack } from "@chakra-ui/react";
import TopBar from "../Components/TopBar";
import OrderCard from "../Components/OrderCard";
import { useState, useEffect } from "react";

const Orders = () => {
    
const [orders, setOrders] = useState([[]]);

const getOrders = async() => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`)
        const json = await response.json()
        console.log(json);

        if (response.ok){
            console.log(json);
            setOrders(json);
        }
}

useEffect(()=> {
    getOrders();
},[])

    return (  
        <div>
            <TopBar heading={'Orders'}/>

            {orders && 
            <Stack justify={'center'} align={'center'} gap={3} marginY={4}>
                {orders.map(order => {
                    <OrderCard order = {order}/>
                })}
            </Stack>
            }
        </div>
    );
}
 
export default Orders;
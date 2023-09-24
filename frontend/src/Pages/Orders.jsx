import { Stack, Text } from "@chakra-ui/react";
import TopBar from "../Components/TopBar";
import OrderCard from "../Components/OrderCard";
import { useState, useEffect } from "react";

const Orders = () => {
    
const [orders, setOrders] = useState([]);

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
            <TopBar heading={'Your Orders'}/>
            {orders && 
            <Stack justify={'center'} align={'center'} gap={3} marginY={20}>
                {orders.map(order => (
                    <OrderCard order = {order}/>
                ))}
            </Stack>
            }
            {
                orders.length === 0 &&
                <Text fontSize={'3xl'} textAlign={'center'} fontWeight={'bold'}> It appears you have not ordered anything yet...</Text>
            }
        </div>
    );
}
 
export default Orders;
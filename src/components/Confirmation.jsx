import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import '../styles/Confirmation.css';

const Confirmation = () => {

    let params = useParams();
    const [order, setOrder] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");


    useEffect(() => {
        const getOrder = async () =>  {
            await supabase
            .from('Orders')
            .select()
            .eq('order_id', params.orderID)
            .then((response) => {
                console.log(response.data);
                setOrder(response.data);
            })
        }
        getOrder();
    })

    // useEffect(() => {
    //     const storedState = localStorage.getItem("selectedOption");
    //     if (storedState) {
    //       setSelectedOption(JSON.parse(selectedOption));
    //     }
    //   }, []);

    return (
        <div className="confirmation-page">
            {order ? (
            <div className="confirmation-header"> 
                <h1>#{params.orderID}</h1>
                <h2> 
                    Your Order Has Been Receieved!
                </h2>
                <h3>
                    Total: ${order.order_total}
                </h3>
                {(selectedOption) ? (<h3> </h3>) : (<h3> </h3>)}    
            </div>
            ) : null}
        </div>
    )
}

export default Confirmation;
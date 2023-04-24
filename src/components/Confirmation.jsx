import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import '../styles/Confirmation.css';
import dog from "../assets/dawg.jpg";

const Confirmation = () => {

    let params = useParams();
    const [order, setOrder] = useState([]);
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
    
    return (
        <div className="confirmation-page">
            <img opacity="0.95" width="100%" src={dog} alt="a dog picture"/>
            {order ? (
            <div className="confirmation-header"> 
                <h2> 
                    Your Order Has Been Receieved!
                </h2>
                <h3> 
                    We will update you with more information<br/> as soon as your order is ready!
                </h3>
                {(selectedOption) ? (<h3> </h3>) : (<h3> </h3>)}    
            </div>
            ) : null}
        </div>
    )
}

export default Confirmation;
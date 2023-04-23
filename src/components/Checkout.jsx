import { useEffect, useState } from "react";
import { supabase } from "../client";
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {

    // const [checkout, setCheckout] = useState({
    //     orderID: uuid4(),
    //     scheduleTime: ""
    // });
    const [orderID, setOrderID] = useState(uuidv4());
    const [user, setUser] = useState(null);
    const [payment, setPayment] = useState(null);
    const [address, setAddress] = useState(null);
    const [pickupTime, setPickupTime] = useState("");

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session);
            if (session) {
                console.log(user)
                setUser(session.user);
                const getPayment = async () => {
                    await supabase
                    .from('PaymentInfo')
                    .select()
                    .eq('user', session.user.id)
                    .then((response) => {
                        console.log("Payment: " + response.data);
                        setPayment(response.data);
                    })
                }
                const getAddress = async () => {
                    await supabase
                    .from('Address')
                    .select()
                    .eq('user', session.user.id)
                    .then((response) => {
                        console.log("Address: " + response.data);
                        setAddress(response.data);
                    })
                }
                getAddress();
                getPayment();
            }
        });

    })

    const onPlaceOrder = async () => {
        await supabase
        .from('Cart')
        .select()
        .eq('user_id', user.id)
        .then((response) => {
            response.data.map((item) => {
                const storeOrderItem = async () => {
                    await supabase
                    .from('Orders')
                    .insert({order_id: orderID, user_id: user.id, payment_id: payment.id, address_id: address.id, 
                        product_id: item.product_id, quantity: item.quantity, pickup_time: pickupTime})
                }
                storeOrderItem();
            })
            .then((err) => { // after storing each item in the orders table database, delete all cart rows with user id
                const deleteCart = async () => {
                    await supabase
                    .from('Carts')
                    .delete()
                    .eq('user_id', user.id)
                    .then((err) => {
                        window.location = `${orderID}/confirmation`
                    });
                }
                deleteCart();
            })
        })
    }

    return (
        <div>
            CHECKOUT PAGE
        </div>
    )
}

export default Checkout;
import { useEffect, useState } from "react";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            // fetch cart by user ID
        }
    }, []);

    const onCheckout = () => {
        
    }

    return (
        <div>
            {/* some styling */}

        </div>
    )
}

export default Cart;
import { useEffect, useState } from "react";
import { supabase } from "../client";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session);
            if (session) {
                console.log(user)
                setUser(session.user);
            }
        })

        const getCartItems = async () => {
            await supabase
            .from('Carts')
            .select()
            .eq('user_id', user.id)
            .then((response) => {
                console.log(response.data);
                setCartItems(response.data);
            });
        }
    }, []);

    const onCheckout = () => {
        
    }

    const onRemove = async (event) => {
        await supabase
        .from('Carts')
        .delete()
        .eq('product_id', event.target.productID)
        .then({response, error} = () => {
            console.log(response);
            console.log(error);
        })
    }

    return (
        <div>
            {/* some styling */}
            CART
        </div>
    )
}

export default Cart;
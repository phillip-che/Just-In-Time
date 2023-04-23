import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetails = () => {

    let params = useParams();
    const [item , setItem] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {

        // sets user
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session);
            if (session) {
                console.log(user)
                setUser(session.user);
            }
        });

        // method to get and set item
        const getItem = async () => {
            await supabase
            .from('Products')
            .select()
            .eq('id', params.productID)
            .then((response) =>  {
                console.log("item: " + response.data);
                setItem(response.data);
            })
        }
        getItem();
    }, []);

    const saveCart = async () => {
        await supabase
        .from('Carts')
        .insert({user_id: user.id, product_id: params.productID, quantity: quantity, price: item.disc_price})
    }

    const onIncrease = () => {
        setQuantity(quantity + 1);
    }

    const onDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            Item ID: {params.productID};
            {item ? (
                <div>
                    
                </div>
            )  : null }
        </div>
    )
}

export default ItemDetails;
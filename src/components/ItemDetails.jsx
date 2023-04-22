import { supabase } from "../client";
import { useEffect } from "react";
import { useParams } from "react-router";

const ItemDetails = () => {

    let params = useParams();
    const [item , setItem] = useState(null);

    useEffect(() => {
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
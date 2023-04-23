import { useEffect } from "react";
import { useParams } from "react-router";

const Confirmation = () => {

    let params = useParams();
    const [order, setOrder] = useState(null);

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
        <div>
            Confirmation Page for Order ID: {params.orderID}
        </div>
    )
}

export default Confirmation;
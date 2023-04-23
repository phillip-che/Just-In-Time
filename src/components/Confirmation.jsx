import { useEffect } from "react";
import { useParams } from "react-router";

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

    useEffect(() => {
        const storedState = localStorage.getItem("selectedOption");
        if (storedState) {
          setSelectedOption(JSON.parse(selectedOption));
        }
      }, []);

    return (
        <div>
            Confirmation Page for Order ID: {params.orderID}
        </div>
    )
}

export default Confirmation;
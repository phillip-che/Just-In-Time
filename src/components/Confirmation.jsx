import { useEffect } from "react";
import { useParams } from "react-router";

const Confirmation = () => {

    let params = useParams();
<<<<<<< HEAD
    const [order, setOrder] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

=======
    const [order, setOrder] = useState([]);
>>>>>>> f108276b32b50ec26c020de1944748732e7117c9

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

<<<<<<< HEAD
    useEffect(() => {
        const storedState = localStorage.getItem("selectedOption");
        if (storedState) {
          setSelectedOption(JSON.parse(selectedOption));
        }
      }, []);
=======
    // order attributes = 
>>>>>>> f108276b32b50ec26c020de1944748732e7117c9

    return (
        <div>
            Confirmation Page for Order ID: {params.orderID}
        </div>
    )
}

export default Confirmation;
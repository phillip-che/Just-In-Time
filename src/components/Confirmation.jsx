import { useParams } from "react-router";

const Confirmation = () => {

    let params = useParams();

    return (
        <div>
            Confirmation Page for Order ID: {params.orderID}
        </div>
    )
}

export default Confirmation;
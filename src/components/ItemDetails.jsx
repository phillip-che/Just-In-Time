import { useParams } from "react-router";

const ItemDetails = () => {

    let params = useParams();

    return (
        <div>
            Item ID: {params.productID};
        </div>
    )
}

export default ItemDetails;
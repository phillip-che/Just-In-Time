import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import ItemCard from "./ItemCard";
const ItemList = () => {

    const [itemList, setItemList] = useState([]);
    let params = useParams();

    useEffect(() => {
        const getItems = async () => {
            await supabase
            .from('Products')
            .select()
            .eq('store_name', params.storeName)
            .then((response) => {
                console.log(response.data);
                setItemList(response.data);
            })
        }
        getItems();
    }, []);

    return (
        <div>
            {itemList ? (
                <div className="item-list">
                    {itemList.map((item) => {
                        <ItemCard 
                        productID={item.id}
                        storeName={item.store_name}
                        name={item.name}
                        price={item.price}
                        disc_price={item.disc_price}
                        disc_percent={item.disc_percent}
                        exp={item.exp}
                        img={item.img_url}
                        />
                    })}
                </div>
            ) : null }
        </div>
    )
}

export default ItemList;
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import Filters from "./Filters";
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

    const onExpFilter = async () => {
        await supabase
        .from('Products')
        .select()
        .order("exp", { ascending: false })
        .then((response) => {
            setItemList(response.data);
        });
    }

    const onPriceFilter = async () => {
        await supabase
        .from('Products')
        .select()
        .order("disc_price", { ascending: false })
        .then((response) => {
            setItemList(response.data);
        });
    }

    const onDiscountFilter = async () => {
        await supabase
        .from('Products')
        .select()
        .order("disc_percent", { ascending: false })
        .then((response) => {
            setItemList(response.data);
        });
    }

    return (
        <div>
            <div className="filters">
                <Filters />
            </div>
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
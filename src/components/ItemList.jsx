import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import Filters from "./Filters";
import ItemCard from "./ItemCard";
import '../styles/ItemList.css'
import FullWidthTextField from "./SearchBar";

const ItemList = () => {

    const [itemList, setItemList] = useState([]);
    const [user, setUser] = useState(null);
    let params = useParams();

    useEffect(() => {

        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session);
            if (session) {
                console.log(user)
                setUser(session.user);
            }
        });

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
            .eq('store_name', params.storeName)
            .order("exp", { ascending: false })
            .then((response) => {
                setItemList(response.data);
            });
    }

    const onPriceFilter = async () => {
        await supabase
            .from('Products')
            .select()
            .eq('store_name', params.storeName)
            .order("disc_price", { ascending: false })
            .then((response) => {
                setItemList(response.data);
            });
    }

    const onDiscountFilter = async () => {
        await supabase
            .from('Products')
            .select()
            .eq('store_name', params.storeName)
            .order("disc_percent", { ascending: false })
            .then((response) => {
                setItemList(response.data);
            });
    }

    return (
        <div>
            <div className="search-bar">
                <FullWidthTextField/>      
            </div>  
            <div className="store-wallpaper">
                {params.storeName}
            </div>
            <div className="product-page">
            <div className="filters">
                <Filters onExpFilter={onExpFilter} onPriceFilter={onPriceFilter} onDiscountFilter={onDiscountFilter} />
            </div>
            {itemList ? (
                <div className="item-list">
                    {itemList.map((item) => 
                        <ItemCard
                            user={user}
                            productID={item.id}
                            storeName={item.store_name}
                            name={item.name}
                            price={item.price}
                            disc_price={item.disc_price}
                            disc_percent={item.disc_percent}
                            exp={item.exp}
                            img={item.img_url}
                            key={item.store_name+item.id}
                        />
                    )}
                </div>
            ) : <p>No products yet lol rip</p>}
            </div>
        </div>
    )
}

export default ItemList;
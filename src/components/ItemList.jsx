import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import BasicSelect from "./Select.jsx";
import ItemCard from "./ItemCard";
import '../styles/ItemList.css'
import FullWidthTextField from "./SearchBar";

const ItemList = () => {

    const [itemList, setItemList] = useState([]);
    const [user, setUser] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    
    let params = useParams();

    const [stores, setStores] = useState([]);

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

        const getStores = async () => {
            await supabase
                .from('Stores')
                .select()
                .then((response) => {
                    setStores(response.data);
                })
        }
        getStores();
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

    const searchItems = (searchInput) => {
        setSearchValue(searchInput);
        console.log(searchInput);

        if (searchValue.length > 0) {
            const filteredItems = Object.keys(itemList).filter(index => 
              Object.values(itemList[index])
                .join("")
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            const filteredData = [...new Set([...filteredItems])];
            const searchList = [];
            filteredData.forEach((item) => {
                searchList.push(itemList[item])
            });
            setFilteredList(searchList);
        }
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
                <FullWidthTextField searchItems={searchItems} />      
            </div> 
            <div className="filter">
                <BasicSelect onExpFilter={onExpFilter} onPriceFilter={onPriceFilter} onDiscountFilter={onDiscountFilter} />
            </div>
            <div className="store-wallpaper">
                {stores.filter(sto => sto.name===params.storeName).map((s) => (
                    // if (s.name === params.storeName) {
                    <img className="store-logo" src={s.img}></img>
                    // <p>Hi</p>
                    // console.log(s.img)
                    // }
                ))
                }
            </div>
            <div className="product-page">
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
                                key={item.store_name + item.id}
                            />
                        )}
                    </div>
                ) : <p>No products yet lol rip</p>}
            </div>
        </div>
    )
}

export default ItemList;
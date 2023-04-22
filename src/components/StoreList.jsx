import { useEffect, useState } from 'react'
import StoreCard from './StoreCard.jsx'
import '../styles/StoreList.css'
import { supabase } from '../client.js'

const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
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


    return (
        <div>
            {stores ? (
                <div className="store-list">
                    {stores.map(store => (
                        <StoreCard 
                        storeLogo={store.img} 
                        storeName={store.name}
                        key={store}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default StoreList;
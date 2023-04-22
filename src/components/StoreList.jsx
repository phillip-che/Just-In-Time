import {useEffect, useState} from 'react'
import StoreCard from './StoreCard.jsx'
import '../styles/StoreList.css'


const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        // database stuff
    }, []);


    return (
        <div className="store-list">
             {stores.map(store => (
                <StoreCard storeLogo={store.img} storeName={store.name}/>
             ))}
        </div>
    )
}

export default StoreList;
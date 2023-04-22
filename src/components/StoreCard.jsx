import '../styles/StoreCard.css'

const StoreCard = ({storeLogo, storeName}) => {
    return (
        <div className="store-card">
            <img className="store-logo" src={storeLogo}/>
            <h3 className="store-name">{storeName}</h3> 
        </div>
    )
}

export default StoreCard;
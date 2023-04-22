const StoreCard = ({img, name}) => {
    return (
        <div className="store-card">
            <img className="store-logo" src={img}/>
            <h3 className="store-name">{name}</h3> 
        </div>
    )
}

export default StoreCard;
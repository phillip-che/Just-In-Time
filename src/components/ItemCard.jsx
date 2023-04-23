import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCard = ({ productID, storeName, name, price, disc_price, disc_percent, exp, img }) => {

    const lsCartName = "shopping_cart";

    const addToCart = () => {
        
        // const storeCart = async () => {
        //     await supabase
        //     .from('Carts')
        //     .insert({user_id: user.id, product_id: params.productID, quantity: quantity, price: disc_price})
        // }
        // storeCart();
        let new_product = {id: productID, name: name, price: price, disc_price: disc_price};

        if (localStorage.getItem(lsCartName) === null) {
            let cart = JSON.stringify([new_product])
            localStorage.setItem(lsCartName, cart);
        } else {
            let parsed_cart = JSON.parse(localStorage.getItem(lsCartName));
            localStorage.setItem(lsCartName, JSON.stringify([...parsed_cart, new_product]));
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'red' }}>${price}</span><span style={{ color: 'green' }}> ${disc_price} ({disc_percent}% off)</span>
                    <p>Expires {exp}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={addToCart}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ItemCard;
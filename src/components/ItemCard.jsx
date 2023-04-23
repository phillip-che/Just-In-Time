import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { supabase } from '../client';
import { useEffect, useState } from 'react';

const ItemCard = ({ user, productID, storeName, name, price, disc_price, disc_percent, exp, img }) => {

    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        await supabase
            .from('Carts')
            .insert({user_id: user.id, product_id: productID, product_name: name, quantity: quantity, price: disc_price})
            .select()
            .then((response) => {
                console.log(response);
            })
    }

    const incQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
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
    )
}

export default ItemCard;
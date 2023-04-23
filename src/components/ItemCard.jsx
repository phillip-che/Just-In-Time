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
        .select()
        .where('user_id', user.id)
        .where('product_id', productID)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            if(response) {
                const updateCart = async () => {
                    await supabase
                    .from('Carts')
                    .update({quantity: quantity+1})
                    .eq('user_id', user.id)
                    .eq('product_id', productID)
                    .then((response) => {
                        console.log(response);
                    })
                }
                updateCart();
            } else {
                const insertToCart = async () => {
                    await supabase
                    .from('Carts')
                    .insert({user_id: user.id, product_id: productID, product_name: name, quantity: quantity, price: disc_price})
                    .select()
                    .then((response) => {
                        console.log(response);
                    })
                }
                insertToCart();   
            }
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
        <Card sx={{ maxWidth: 345, borderRadius:'15px',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.05)',
            transition: 'box-shadow 0.2s ease-in-out',
            '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)'
            },
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12  ))',
            borderRadius:'15px'
       }}>
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
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import { supabase } from '../client';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid #F9B1B1 `,
    backgroundColor:'#F9B1B1',
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch the cart count from the database and update the state
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        const fetchCartCount = async () => {
          await supabase
            .from('Carts')
            .select()
            .eq('user_id', session.user.id)
            .then((response) => {
              console.log(response.data);
              setCartCount(response.data.length);
            })
          };
          fetchCartCount();
        }
    })
  }, [cartCount]);

  const onClick = () => {
    console.log("TEST");
  }


  return (
    <IconButton onClick={onClick} aria-label="cart" style={{ borderRadius: '8px', padding:'13px', marginTop:'1px', outline:'none'}}>
      <StyledBadge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
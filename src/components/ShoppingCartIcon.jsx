import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    // fetch the cart count from the database and update the state
    const fetchCartCount = async () => {
      
      setCartCount(data.cartCount);
    };
    fetchCartCount();
  }, []);


  return (
    <IconButton aria-label="cart" style={{ borderRadius: '8px', padding:'13px', marginTop:'1px', outline:'none'}}>
      <StyledBadge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
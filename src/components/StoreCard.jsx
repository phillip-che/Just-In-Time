import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from "react-router-dom"

export default function StoreCard({ storeLogo, storeName, storeAddr }) {

  const handleStoreClick = () => {

  }

  return (
    <Card sx={{ 
      maxWidth: 345,
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.05)',
      transition: 'box-shadow 0.2s ease-in-out',
      fontFamily: "Futura",
      '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)'
      },
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12  ))',
      borderRadius:'15px'
    }}>
      <Link to={"/" + storeName + "/products"}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="140"
              width="100%"
              image={storeLogo}
            />
          <CardContent sx={{backgroundImage: 'linear-gradient(45deg, #F9B1B1 60%, pink 85%)', fontFamily: "Futura"}}>
            <Typography gutterBottom variant="h5" component="div" 
              sx={{ color: 'white', fontSize:'32px', fontFamily: "Futura", fontWeight: "200"}}>
              {storeName}
            </Typography>
            <Typography sx={{color: 'black', fontFamily: "Futura"}} variant="body2" color="text.secondary">
              {storeAddr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
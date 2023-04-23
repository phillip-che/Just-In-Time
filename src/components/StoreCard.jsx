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
    <Card className="store-card" sx={{ 
      maxWidth: 345,
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.10)',
      transition: 'box-shadow 0.2s ease-in-out',
      '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.20)'
      },
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12  ))'
    }}>
      <Link to={"/" + storeName + "/products"}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="140"
              width="100%"
              image={storeLogo}
            />
          <CardContent sx={{backgroundImage: 'linear-gradient(45deg, #F9B1B1 60%, pink 85%)' }}>
            <Typography gutterBottom variant="h5" component="div" 
              sx={{ color: 'white', fontSize:'32px'}}>
              {storeName}
            </Typography>
            <Typography sx={{color: 'black'}} variant="body2" color="text.secondary">
              {storeAddr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
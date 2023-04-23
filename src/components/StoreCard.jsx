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
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/" + storeName + "/products"}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={storeLogo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {storeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {storeAddr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
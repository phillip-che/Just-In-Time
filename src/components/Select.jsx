import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({onDiscountFilter, onPriceFilter, onExpFilter}) {

  return (
    <Box sx={{ minWidth: 80,}}>
      <FormControl fullWidth 
        sx={{ '& .MuiInputBase-root': { color:'#F9B1B1 ', fontSize: '18px', fontFamily:'Futura'}, }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select>
          <MenuItem onClick={onPriceFilter} value={"Price"}>Price</MenuItem>
          <MenuItem onClick={onDiscountFilter} value={"Discount"}>Discount</MenuItem>
          <MenuItem onClick={onExpFilter} value={"Expiration"}>Expiration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
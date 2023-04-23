import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ searchItems }) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField onChange={(input) => searchItems(input.target.value)} fullWidth label="Search" id="fullWidth" sx={{
          '& .MuiInputBase-input': {
            height: '14px', // adjust the height here
          },
        }} />
    </Box>
  );
}
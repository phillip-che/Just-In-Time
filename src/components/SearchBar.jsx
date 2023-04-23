import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  const { onChange } = props;

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <TextField
        placeholder="Search"
        onChange={handleInputChange}
        variant="standard"
      />
    </SearchBarContainer>
  );
}
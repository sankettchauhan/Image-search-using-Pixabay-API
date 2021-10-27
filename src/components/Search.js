import {
  Box,
  InputLabel,
  FormControl,
  Input,
  InputAdornment,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

export default function Search({ setImages, searchText, setSearchText }) {
  const [amount, setAmount] = useState(15);

  useEffect(() => {
    if (searchText !== "") {
      const apiUrl = "https://pixabay.com/api/";
      const apiKey = "18537201-91322fe6f802eb55b93212bf6";
      const link = `${apiUrl}?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
      axios
        .get(link)
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    } else setImages([]);
  }, [searchText, amount, setImages]);

  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="search-text">Search</InputLabel>
        <Input
          id="search-text"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard" style={{ marginLeft: 3, width: 50 }}>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          id="amount"
          type="number"
          min={3}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormControl>
    </Box>
  );
}

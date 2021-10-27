import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "./Search";

export default function Navbar({
  images,
  setImages,
  searchText,
  setSearchText,
}) {
  return (
    <AppBar position="static" color="#88E0EF">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Pixabay Image Finder</Typography>
        <Search
          images={images}
          setImages={setImages}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </Toolbar>
    </AppBar>
  );
}

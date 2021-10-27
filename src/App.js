import { CssBaseline, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageResults from "./components/ImageResults";

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <CssBaseline />
      <Navbar
        images={images}
        setImages={setImages}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {images.length > 0 && <ImageResults images={images} />}
      {searchText === "" ? (
        <Typography variant="h3" align="center" style={{ margin: "10% 10% 0" }}>
          Type a query so that images can be viewed here.
        </Typography>
      ) : images.length === 0 ? (
        <Typography variant="h3" align="center" style={{ margin: "10% 10% 0" }}>
          No images found.
        </Typography>
      ) : null}
    </>
  );
}
// 18537201-91322fe6f802eb55b93212bf6
export default App;

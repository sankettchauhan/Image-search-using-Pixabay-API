import {
  Dialog,
  IconButton,
  Grid,
  Card,
  CardMedia,
  makeStyles,
  Box,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  GetApp as GetAppIcon,
  ThumbUpAlt,
  ChatBubble,
  ZoomIn,
  Close as CloseIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0.5),
  },
  card: {
    maxWidth: "100%",
    position: "relative",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardfooter: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  cardimg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  griditem: {
    padding: theme.spacing(1),
  },
  dialogclose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

export default function ImageResults({ images }) {
  const [imageState, setImageState] = useState({
    open: false,
    currentImage: "",
  });

  const classes = useStyles();

  const handleOpen = (img) => setImageState({ open: true, currentImage: img });
  const handleClose = () => setImageState({ open: false });

  function ImageCard({ image }) {
    return (
      <Card className={classes.card} square variant="outlined">
        <CardMedia
          component="img"
          src={`${image.largeImageURL}`}
          alt="green iguana"
          height="140"
          className={classes.cardimg}
        />
        <Box className={classes.cardfooter}>
          <IconButton variant="span" className={classes.contentitem}>
            {image.likes}
            <ThumbUpAlt />
          </IconButton>
          <IconButton variant="span" className={classes.contentitem}>
            {image.comments}
            <ChatBubble />
          </IconButton>
          <IconButton variant="span" className={classes.contentitem}>
            {image.downloads}
            <GetAppIcon />
          </IconButton>
          <IconButton
            onClick={() => handleOpen(image.largeImageURL)}
            variant="span"
            className={classes.contentitem}
          >
            <ZoomIn />
          </IconButton>
        </Box>
      </Card>
    );
  }

  if (images.length > 0) {
    return (
      <>
        <Grid container className={classes.container}>
          {images.map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={`image-${index + 1}`}
              className={classes.griditem}
            >
              <ImageCard image={image} />
            </Grid>
          ))}
        </Grid>

        {/* dialog when a user clicks on zoom icon */}
        <Dialog modal={false} onClose={handleClose} open={imageState.open}>
          <img src={imageState.currentImage} alt="" />
          <IconButton className={classes.dialogclose} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Dialog>
      </>
    );
  } else {
    return <div>No images found!!</div>;
  }
}

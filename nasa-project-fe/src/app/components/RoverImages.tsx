import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { State } from "../state/app.reducer";
import { getImages } from "../state/app.actions";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SyncLoader } from "react-spinners";
const useStyles = makeStyles((theme) => ({
  imagesContainer: {
    margin: "0 5%",
    maxWidth: "90%",
  },
  image: {
    width: "200px",

    borderRadius: "8%",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
}));

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export const RoverImages = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const rover = useSelector((state) => state.rovers.rover);
  useEffect(() => {
    getImages(images.date, rover)(dispatch);
  }, [images.date, rover]);
  return (
    <Grid
      container
      className={classes.imagesContainer}
      justify="space-around"
      alignItems="center"
      spacing={2}
    >
      {images.loading && <SyncLoader />}
      {!images.loading && images.list[0].photos.length > 0
        ? images.list[0].photos.map((e: any) => {
            return (
              <Grid item sm={3} xs={5}>
                <a href={e.img_src}>
                  <img src={e.img_src} className={classes.image} />
                </a>
              </Grid>
            );
          })
        : !images.loading && (
            <Typography>
              No Images Returned for this date. Pick another date
            </Typography>
          )}
    </Grid>
  );
};

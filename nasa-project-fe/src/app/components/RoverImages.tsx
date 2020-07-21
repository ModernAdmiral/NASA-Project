import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { State } from "../state/app.reducer";
import { getImages } from "../state/app.actions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  imagesContainer: {
    display: "flex",
  },
});

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export const RoverImages = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.list);
  const loading = useSelector((state) => state.images.loading);
  const date = useSelector((state) => state.images.date);
  const rover = useSelector((state) => state.images.rover);
  console.log("date before useeffect", date);
  useEffect(() => {
    getImages(date, rover)(dispatch);
    console.log(date, "date");
  }, [date]);
  console.log("images global", images);
  return (
    <Grid container spacing={2}>
      {!loading &&
        images[0].photos.map((e: any) => {
          return (
            <Grid item sm={3}>
              <img width="200px" src={e.img_src} />
            </Grid>
          );
        })}
    </Grid>
  );
};

import React, { useEffect } from "react";
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import RoverCard from "./RoverCard";
import { makeStyles } from "@material-ui/core/styles";
// import { Rover } from "../../models/Rovers";
import { getRovers } from "../../state/app.actions";
import { State } from "../../state/app.reducer";
import { data } from "./RoverCardData";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    // maxWidth: "1000px",
    justifyContent: "space-around",
    marginTop: "20px",
    marginBottom: "5vh",
  },
  media: {
    height: 140,
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
}));
const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
export const RoverList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rovers = useSelector((state) => state.rovers.list);
  const loading = useSelector((state) => state.rovers.loading);
  const rover = useSelector((state) => state.rovers.rover);

  useEffect(() => {
    getRovers()(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className={classes.cardsContainer}>
        {!loading &&
          data.map((card, index) => {
            return (
              <RoverCard
                rover={rovers[0].rovers[index].name}
                image={card.image}
                description={card.description}
                info={card.info}
                key={rovers[0].rovers[index].id}
              />
            );
          })}
      </div>
      <Typography variant="h4" className={classes.title}>
        Viewing photos for the {rover} Rover:
      </Typography>
    </>
  );
};

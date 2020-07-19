import React, { useEffect } from "react";
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import RoverCard from "./RoverCard";
import { makeStyles } from "@material-ui/core/styles";
import { Rover } from "../../models/Rovers";
import { getRovers } from "../../state/app.actions";
import { State } from "../../state/app.reducer";
import { data } from "./RoverCardData";
const useStyles = makeStyles({
  cardsContainer: {
    display: "flex",
    minWidth: "1000px",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  media: {
    height: 140,
  },
});
const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
export const RoverList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rovers = useSelector((state) => state.rovers.list);
  const loading = useSelector((state) => state.rovers.loading);
  useEffect(() => {
    getRovers()(dispatch);
  }, [dispatch]);
  !loading &&
    console.log("loaded rovers", rovers, rovers[0].rovers[0].name, rovers[2]);
  return (
    <div className={classes.cardsContainer}>
      {!loading &&
        data.map((card, index) => {
          return (
            <RoverCard
              rover={rovers[0].rovers[index].name}
              image={card.image}
              description={card.description}
              info={card.info}
            />
          );
        })}
      {/* <RoverCard
        rover="Curiosity"
        image="https://www.nasa.gov/sites/default/files/thumbnails/image/pia23378-16.jpg"
        description="Curiosity is a car-sized rover designed to explore the crater Gale on Mars as part of NASA's Mars Science Laboratory mission (MSL). It landed on mars on August 6th, 2012, and it still there to this day"
        info="https://en.wikipedia.org/wiki/Curiosity_(rover)"
      />
      <RoverCard
        rover="Opprotunity"
        image="https://api.time.com/wp-content/uploads/2019/02/nasa-space-rover-opportunity-1.jpg?quality=85"
        description="Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program. It was active on Mars from January 25, 2004 until the middle of 2018."
        info="https://en.wikipedia.org/wiki/Opportunity_(rover)"
      />
      <RoverCard
        rover="Spirit"
        image="https://solarsystem.nasa.gov/system/content_pages/main_images/1068_rover2-1.jpg"
        description="Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from January 4, 2004 until we lost contact on March 22, 2010. It was one of two rovers of NASA's Mars Exploration Rover Mission."
        info="https://en.wikipedia.org/wiki/Spirit_(rover)"
      /> */}
    </div>
  );
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { setRoverName } from "../../../state/app.actions";
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import { State } from "../../../state/app.reducer";

const useStyles = makeStyles({
  card: {
    maxWidth: "345px",
    flexShrink: 2,
    marginTop: "2vh",
  },
  media: {
    height: 175,
  },
  selected: {
    color: "#fff",
    backgroundColor: "#3f51b5",
    "&:hover": {
      color: "#3f51b5",
    },
  },
});

type RoverCardProps = {
  rover: string;
  imageUrl: string;
  description: string;
  info: string;
};
const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export const RoverCard = (props: RoverCardProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentRover = useSelector((state) => state.rovers.rover);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title={`${props.rover} Rover`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.rover} Rover
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={props.rover === currentRover ? classes.selected : ""}
          onClick={() => {
            setRoverName(props.rover)(dispatch);
          }}
        >
          {props.rover === currentRover ? "Selected" : "Select"}
        </Button>
        <Button size="small" color="primary" href={props.info} target="_">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

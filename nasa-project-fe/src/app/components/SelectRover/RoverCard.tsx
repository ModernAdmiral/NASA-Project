import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { setRoverName } from "../../state/app.actions";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

type RoverCardProps = {
  rover: any;
  image: string;
  description: string;
  info: string;
};

export default function RoverCard(props: RoverCardProps) {
  const classes = useStyles();
  console.log("props.rover", props.rover);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
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
          onClick={() => {
            console.log(typeof props.rover, "rover");
            setRoverName(props.rover);
          }}
        >
          Select
        </Button>
        <Button size="small" color="primary" href={props.info} target="_">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

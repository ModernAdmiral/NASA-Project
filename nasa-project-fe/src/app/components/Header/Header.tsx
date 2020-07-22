import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px",
    },
    marginBottom: "1vh",
  },
  subTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        NASA Mars Rover Image Finder
      </Typography>
      <Typography variant="h5" className={classes.subTitle}>
        Please select a rover and date to view the photos
      </Typography>
    </>
  );
};

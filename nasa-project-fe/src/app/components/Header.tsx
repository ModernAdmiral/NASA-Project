import React from "react";
import { useStyles } from "@material-ui/pickers/views/Calendar/Day";
import { Typography } from "@material-ui/core";

export const Header = () => {
  //   const classes = useStyles();
  return (
    <>
      <Typography variant="h2">NASA Mars Rover Image Finder</Typography>
      <Typography variant="h5">
        Please select a rover and date to view the photo taken on that date
      </Typography>
    </>
  );
};

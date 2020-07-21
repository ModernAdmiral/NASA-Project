import React, { useEffect } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { setPhotoDate } from "../state/RoverImage/roverImage.actions";

export const SelectDate = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18")
  );

  // useEffect(() => {
  //   selectedDate && setPhotoDate(selectedDate.toISOString().slice(0, 10));
  //   console.log(
  //     "date action",
  //     selectedDate && selectedDate.toISOString().slice(0, 10)
  //   );
  // }, [selectedDate]);
  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };
  useEffect(() => {
    async function dateFunction() {
      const date = await selectedDate?.toISOString().slice(0, 10);
      if (date) {
        setPhotoDate(date);
        console.log("date async", date);
      }
    }
    dateFunction();
    console.log(
      "date action",
      selectedDate && selectedDate.toISOString().slice(0, 10)
    );
  }, [selectedDate]);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="yyyy-MM-dd"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          // maxDate="2013-01-03"
          // minDate="2012-01-03"
        />
      </>
    </MuiPickersUtilsProvider>
  );
};

import React, { useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { setPhotoDate } from "../state/RoverImage/roverImage.actions";
import TextField from "@material-ui/core/TextField";
import { State } from "../state/app.reducer";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export const SelectDate = () => {
  let dispatch = useDispatch();
  const rover = useSelector((state) => state.rovers.rover);

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18")
  );
  const TextFieldComponent = (props: any) => {
    return <TextField {...props} disabled={true} variant="outlined" />;
  };
  useEffect(() => {
    async function dateFunction() {
      const date = await selectedDate?.toISOString().slice(0, 10);
      console.log("date async", date);

      if (date && date.length === 10) {
        setPhotoDate(date)(dispatch);
      }
    }
    dateFunction();
  }, [selectedDate, dispatch]);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Change Earth Date"
          format="yyyy-MM-dd"
          value={selectedDate}
          onChange={handleDateChange}
          autoOk={true}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          TextFieldComponent={TextFieldComponent}
          minDateMessage="This rover wasn't on mars on this date! Pick another"
          maxDateMessage="This rover wasn't on mars on this date! Pick another"
          minDate={
            rover === "Curiosity"
              ? "2012-08-06"
              : rover === "Opportunity"
              ? "2004-01-25"
              : rover === "Spirit"
              ? "2004-01-04"
              : undefined
          }
          maxDate={
            rover === "Curiosity"
              ? "2020-12-31"
              : rover === "Opportunity"
              ? "2018-04-14"
              : rover === "Spirit"
              ? "2010-03-20"
              : undefined
          }
        />
      </>
    </MuiPickersUtilsProvider>
  );
};

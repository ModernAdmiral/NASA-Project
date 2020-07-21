// import { Rover } from "../../models/Rovers";
import { GetImages } from "./roverImage.actions";
export type ImagesState = {
  list: any;
  error: string;
  loading: boolean;
  date: string;
  rover: string;
};

export type DateState = {
  date: string;
};

const initialState: ImagesState = {
  list: [],
  error: "",
  loading: true,
  date: "2014-08-17",
  rover: "Curiosity",
};

export const imagesReducer = (state = initialState, action: GetImages) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case "GET_IMAGES_START":
      return { ...state, error: "", loading: true };
    case "GET_IMAGES_SUCCESS":
      return { ...state, error: "", loading: false, list: [action.payload] };
    case "GET_IMAGES_FAILURE":
      return { ...state, error: action.payload, loading: false, list: [] };
    case "ROVER_CHANGE":
      return { ...state, rover: action.payload };
    case "DATE_CHANGE":
      console.log("date reducer", action.payload);
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

// export const dateChangeReducer = (
//   state = dateInitialState,
//   action: GetImages
// ) => {
//   console.log(action.type, "action.type dateCHange");
//   switch (action.type) {
//     case "DATE_CHANGE":
//       console.log("date reducer", action.payload);
//       return { ...state, date: action.payload };
//     default:
//       return state;
//   }
// };

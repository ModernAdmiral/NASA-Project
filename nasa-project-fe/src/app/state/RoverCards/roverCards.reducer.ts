import { GetRovers } from "./roverCards.actions";
import { Rover } from "../../models/Rovers";

export type RoversState = {
  list: Rover[];
  error: string;
  loading: boolean;
  rover: string;
};

const initialState: RoversState = {
  list: [],
  error: "",
  loading: true,
  rover: "Curiosity",
};

export const roversReducer = (state = initialState, action: GetRovers) => {
  switch (action.type) {
    case "GET_ROVERS_START":
      return { ...state, error: "", loading: true };
    case "GET_ROVERS_SUCCESS":
      return { ...state, error: "", loading: false, list: [action.payload] };
    case "GET_ROVERS_FAILURE":
      return { ...state, error: action.payload, loading: false, list: [] };
    case "ROVER_CHANGE":
      return { ...state, rover: action.payload };
    default:
      return state;
  }
};

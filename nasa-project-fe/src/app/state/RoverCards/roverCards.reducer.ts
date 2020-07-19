import { Rover } from "../../models/Rovers";
import { GetRovers } from "./roverCards.actions";

export type RoversState = {
  list: any;
  error: string;
  loading: boolean;
};

const initialState: RoversState = {
  list: [],
  error: "",
  loading: true,
};

export const roversReducer = (state = initialState, action: GetRovers) => {
  switch (action.type) {
    case "GET_ROVERS_START":
      return { ...state, error: "", loading: true };
    case "GET_ROVERS_SUCCESS":
      return { ...state, error: "", loading: false, list: [action.payload] };
    case "GET_ROVERS_FAILURE":
      return { ...state, error: action.payload, loading: false, list: [] };
    default:
      return state;
  }
};

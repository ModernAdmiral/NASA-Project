import { combineReducers } from "redux";

import { roversReducer, RoversState } from "./RoverCards/roverCards.reducer";

export type State = { rovers: RoversState };
export const reducer = combineReducers({ rovers: roversReducer });

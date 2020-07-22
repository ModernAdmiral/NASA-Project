import { combineReducers } from "redux";

import { roversReducer, RoversState } from "./RoverCards/roverCards.reducer";
import { imagesReducer, ImagesState } from "./RoverImage/roverImage.reducer";
export type State = { rovers: RoversState; images: ImagesState };
export const reducer = combineReducers({
  rovers: roversReducer,
  images: imagesReducer,
});

import { GetImages } from "./roverImage.actions";
import { Image, initialImageListState } from "../../models/Images";

export type ImagesState = {
  list: Image;
  error: string;
  loading: boolean;
  date: string;
};

export type DateState = {
  date: string;
};

const initialState: ImagesState = {
  list: initialImageListState,
  error: "",
  loading: true,
  date: "2014-08-17",
};

export const imagesReducer = (state = initialState, action: GetImages) => {
  switch (action.type) {
    case "GET_IMAGES_START":
      return { ...state, error: "", loading: true };
    case "GET_IMAGES_SUCCESS":
      return { ...state, error: "", loading: false, list: [action.payload] };
    case "GET_IMAGES_FAILURE":
      return { ...state, error: action.payload, loading: false, list: [] };
    case "DATE_CHANGE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

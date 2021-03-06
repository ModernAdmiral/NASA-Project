import axios from "axios";
import { Image } from "../../models/Images";

type Images = Image;
type GetImagesStart = { type: "GET_IMAGES_START" };
type GetImagesSuccess = { type: "GET_IMAGES_SUCCESS"; payload: Images };
type GetImagesFail = { type: "GET_IMAGES_FAILURE"; payload: string };
type SetPhotoDate = { type: "DATE_CHANGE"; payload: string };

export type GetImages =
  | GetImagesStart
  | GetImagesSuccess
  | GetImagesFail
  | SetPhotoDate;

export const getImages = (date: string, rover: string) => (
  dispatch: (action: GetImages) => void
) => {
  dispatch({ type: "GET_IMAGES_START" });
  axios
    .get<Images>(
      `http://localhost:8080/api/v1/rovers/${rover}/photos?earth_date=${date}`
    )
    .then((res) => dispatch({ type: "GET_IMAGES_SUCCESS", payload: res.data }))
    .catch((err) =>
      dispatch({ type: "GET_IMAGES_FAILURE", payload: err.status })
    );
};

export const setPhotoDate = (date: string) => (
  dispatch: (action: GetImages) => void
) => {
  dispatch({ type: "DATE_CHANGE", payload: date });
};

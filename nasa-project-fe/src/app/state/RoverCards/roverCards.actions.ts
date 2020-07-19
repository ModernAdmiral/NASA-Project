import axios from "axios";

import { Rover } from "../../models/Rovers";

type GetRoversStart = { type: "GET_ROVERS_START" };
type GetRoversSuccess = { type: "GET_ROVERS_SUCCESS"; payload: Rover };
type GetRoversFail = { type: "GET_ROVERS_FAILURE"; payload: string };

export type GetRovers = GetRoversStart | GetRoversSuccess | GetRoversFail;

export const getRovers = () => (dispatch: (action: GetRovers) => void) => {
  dispatch({ type: "GET_ROVERS_START" });
  axios
    .get<Rover>("http://localhost:8080/api/v1/rovers")
    .then((res) => dispatch({ type: "GET_ROVERS_SUCCESS", payload: res.data }))
    .catch((err) =>
      dispatch({ type: "GET_ROVERS_FAILURE", payload: err.status })
    );
};

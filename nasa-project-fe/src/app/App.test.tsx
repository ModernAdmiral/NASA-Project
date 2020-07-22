import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { State } from "./state/app.reducer";
const mockStore = configureStore([]);

let store: State;

const Rovers = {
  rovers: [
    {
      name: "Curiosity",
      id: 1,
    },
    {
      name: "Spirit",
      id: 2,
    },
    {
      name: "Opprotunity",
      id: 3,
    },
  ],
};

const Images = {
  photos: [
    {
      id: "123",
      sol: "1000",
      camera: {
        id: "321",
        name: "CAMERA_NAME",
        full_name: "full camera name",
      },
      earth_date: "2000-01-01",
      img_src: "wwww.testimgsrc123.com",
    },
  ],
};

beforeEach(() => {
  store = mockStore({
    images: {
      list: Images,
      error: "",
      loading: true,
      date: "2000-01-01",
    },
    rovers: {
      list: Rovers,
      error: "",
      loading: true,
      rover: "Curiosity",
    },
  });
});

test("renders without errors", () => {
  const { baseElement } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(baseElement).toBeTruthy();
});

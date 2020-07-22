import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RoverList } from "./RoverList";

import { store } from "../../../state/app.store";

const TestBed = () => (
  <Provider store={store}>
    <RoverList />
  </Provider>
);

test("renders without errors", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test("renders 'Viewing photos'", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("Viewing photos");
});

test("renders initial state rover 'Curiosity'", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("Curiosity");
});

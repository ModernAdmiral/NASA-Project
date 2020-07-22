import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Provider } from "react-redux";
import { RoverImages } from "./RoverImages";
import { store } from "../../state/app.store";

const TestBed = () => (
  <Provider store={store}>
    <RoverImages />
  </Provider>
);

test("renders without errors", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test("Images Wrapper is using Material-UI Grid", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toContainHTML("MuiGrid");
});

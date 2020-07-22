import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RoverCard } from "./RoverCard";

import { store } from "../../../state/app.store";

const RoverCardProps = {
  rover: "test name",
  imageUrl: "test image",
  description: "test description",
  info: "test info",
};

const TestBed = () => (
  <Provider store={store}>
    <RoverCard props={RoverCardProps} />
  </Provider>
);

test("renders without errors", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test("renders Rover text", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("Rover");
});

test("renders Select button", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("Select");
});
test("renders Learn More button", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("Learn More");
});

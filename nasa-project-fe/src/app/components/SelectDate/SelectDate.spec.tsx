import React from "react";
import { render, queryByAttribute } from "@testing-library/react";
import { Provider } from "react-redux";
import { SelectDate } from "./SelectDate";
import { store } from "../../state/app.store";

const TestBed = () => (
  <Provider store={store}>
    <SelectDate />
  </Provider>
);

test("renders without errors", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test("renders Keyboard Date Picker with a label", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toContainHTML("label");
});

test("renders Keyboard Date Picker with accurate classname", () => {
  const baseElement = render(<TestBed />);
  const container = baseElement.container.firstChild;
  expect(container).toHaveClass("MuiFormControl-root");
});

test("renders Keyboard Date Picker with accurate id", () => {
  const baseElement = render(<TestBed />);
  const getById = queryByAttribute.bind(null, "id");

  const datePickerId = getById(
    baseElement.container,
    "date-picker-dialog-label"
  );
  expect(datePickerId).toBeTruthy();
});

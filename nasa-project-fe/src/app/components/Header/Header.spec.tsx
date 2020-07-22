import React from "react";

import { render } from "@testing-library/react";

import { Header } from "./Header";

const TestBed = () => <Header />;

test("renders without errors", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test("renders title text", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML("NASA Mars Rover Image Finder");
});
test("renders subtitle text", () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement.firstChild).toContainHTML(
    "Please select a rover and date to view the photos"
  );
});

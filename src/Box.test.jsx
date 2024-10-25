import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";
import { it, expect } from "vitest";

it("renders without crashing", function () {
  render(<Box />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import { it, expect } from "vitest";

it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});